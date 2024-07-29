document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const host_name = document.getElementById('host_name').value;
    const host_ip = document.getElementById('host_ip').value;
    const system_type = document.getElementById('system_type').value;
    const level = document.getElementById('level').value;
    const log_time = document.getElementById('log_time').value;

    const queryParams = new URLSearchParams({ host_name, host_ip, system_type, level, log_time });

    fetch(`/search?${queryParams.toString()}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<ul>' + data.map(log => `
                <li>
                    <strong>ID:</strong> ${log.ID}<br>
                    <strong>Host Name:</strong> ${log.HOST_NAME}<br>
                    <strong>Host IP:</strong> ${log.HOST_IP}<br>
                    <strong>System Type:</strong> ${log.SYSTEM_TYPE}<br>
                    <strong>Level:</strong> ${log.LEVEL}<br>
                    <strong>Process Name:</strong> ${log.PROCESS_NAME}<br>
                    <strong>Content:</strong> ${log.CONTENT}<br>
                    <strong>Log Time:</strong> ${log.LOG_TIME}<br>
                    <strong>Timestamp:</strong> ${log.TIMESTAMP}
                </li>
            `).join('') + '</ul>';
        })
        .catch(error => console.error('Error:', error));
});

