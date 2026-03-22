/**
 * halla.ai Contact Form Handler
 *
 * Google Apps Script web app that receives POST from the contact form,
 * logs to a Google Sheet, and sends email notification to info@jeju.ai.
 *
 * SETUP:
 * 1. Go to https://script.google.com → New project
 * 2. Paste this code into Code.gs
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL → update APPS_SCRIPT_URL in contact pages
 */

var SHEET_ID = '1_21c9sB7kTcum--0BHK2_GYFf0zi2-vRWir65qNXLtg';
var NOTIFY_EMAIL = 'info@jeju.ai';
var SHEET_NAME = 'Submissions';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var name = (data.name || '').trim();
    var email = (data.email || '').trim();
    var message = (data.message || '').trim();
    var locale = (data.locale || 'ko').trim();

    if (!name || !email || !message) {
      return jsonResponse(400, { error: 'Missing required fields' });
    }

    var timestamp = new Date().toISOString();

    // Append to Google Sheet
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.appendRow([timestamp, name, email, message, locale]);

    // Send email notification
    var subject = '[halla.ai] ' + (locale === 'ko' ? '새 문의' : 'New inquiry') + ': ' + name;
    var body = [
      locale === 'ko' ? '새 문의가 접수되었습니다.' : 'New contact form submission.',
      '',
      (locale === 'ko' ? '이름' : 'Name') + ': ' + name,
      (locale === 'ko' ? '이메일' : 'Email') + ': ' + email,
      (locale === 'ko' ? '메시지' : 'Message') + ':',
      message,
      '',
      '---',
      'Submitted at ' + timestamp,
      'Sheet: https://docs.google.com/spreadsheets/d/' + SHEET_ID
    ].join('\n');

    GmailApp.sendEmail(NOTIFY_EMAIL, subject, body, {
      replyTo: email,
      name: 'halla.ai Contact Form'
    });

    return jsonResponse(200, { success: true });

  } catch (err) {
    return jsonResponse(500, { error: err.toString() });
  }
}

function doGet() {
  return jsonResponse(200, { status: 'ok', service: 'halla.ai contact form handler' });
}

function jsonResponse(code, data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
