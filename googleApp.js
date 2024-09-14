function doPost(e) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1");
  
    var dataArray = JSON.parse(e.postData.contents);
    var data = dataArray[0];
    sheet.appendRow([data.UserId,data.Timestamp,data.Section,data.Question1_1_min,data.Question1_1_max,data.Question1_2,data.Question1_3_min,data.Question1_3_max,data.Question1_4,data.Question1_5,data.Question1_6,data.Question1_7,data.Question1_8,data.Question1_9]);
    data = dataArray[1];
    sheet.appendRow([data.UserId,data.Timestamp,data.Section,data.Question1_1_min,data.Question1_1_max,data.Question1_2,data.Question1_3_min,data.Question1_3_max,data.Question1_4,data.Question1_5,data.Question1_6,data.Question1_7,data.Question1_8,data.Question1_9]);
    data = dataArray[2];
    sheet.appendRow([data.UserId,data.Timestamp,data.Section,data.Question1_1_min,data.Question1_1_max,data.Question1_2,data.Question1_3_min,data.Question1_3_max,data.Question1_4,data.Question1_5,data.Question1_6,data.Question1_7,data.Question1_8,data.Question1_9]);
    data = dataArray[3];
    sheet.appendRow([data.UserId,data.Timestamp,data.Section,data.Question1_1_min,data.Question1_1_max,data.Question1_2,data.Question1_3_min,data.Question1_3_max,data.Question1_4,data.Question1_5,data.Question1_6,data.Question1_7,data.Question1_8,data.Question1_9]);
    data = dataArray[4];
    sheet.appendRow([data.UserId,data.Timestamp,data.Section,data.Question1_1_min,data.Question1_1_max,data.Question1_2,data.Question1_3_min,data.Question1_3_max,data.Question1_4,data.Question1_5,data.Question1_6,data.Question1_7,data.Question1_8,data.Question1_9]);
      
    return ContentService.createTextOutput('Success');
  }
    