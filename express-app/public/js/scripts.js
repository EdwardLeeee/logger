$(document).ready(function() {
    $('#searchForm').on('submit', function(e) {
        e.preventDefault();
        var query = $(this).serialize();
        $.get('/search?' + query, function(data) {
            var results = data;
            var tableBody = $('#resultsTable tbody');
            tableBody.empty();
            results.forEach(function(log) {
                var row = '<tr>' +
                          '<td>' + log.ID + '</td>' +
                          '<td>' + log.HOST_NAME + '</td>' +
                          '<td>' + log.HOST_IP + '</td>' +
                          '<td>' + log.SYSTEM_TYPE + '</td>' +
                          '<td>' + log.LEVEL + '</td>' +
                          '<td>' + log.PROCESS_NAME + '</td>' +
                          '<td>' + log.CONTENT + '</td>' +
                          '<td>' + log.LOG_TIME + '</td>' +
                          '<td>' + log.TIMESTAMP + '</td>' +
                          '</tr>';
                tableBody.append(row);
            });
        });
    });
});

