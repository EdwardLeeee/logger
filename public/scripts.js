document.addEventListener('DOMContentLoaded', function() {
    // 初始隱藏 <h2> 元素和 #results 區域
    const resultsHeader = document.querySelector('h2');
    const resultsDiv = document.getElementById('results');
    resultsHeader.style.display = 'none';
    resultsDiv.style.display = 'none';

    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const host_name = document.getElementById('host_name').value;
        const host_ip = document.getElementById('host_ip').value;
        const system_type = document.getElementById('system_type').value;
        const level = document.getElementById('level').value;
        const log_start_time = document.getElementById('log_start_time').value;
        const log_end_time = document.getElementById('log_end_time').value;

        const queryParams = new URLSearchParams();

        if (host_name) queryParams.append('host_name', host_name);
        if (host_ip) queryParams.append('host_ip', host_ip);
        if (system_type) queryParams.append('system_type', system_type);
        if (level) queryParams.append('level', level);
        if (log_start_time) queryParams.append('log_start_time', log_start_time);
        if (log_end_time) queryParams.append('log_end_time', log_end_time);

        fetch(`/search?${queryParams.toString()}`)
            .then(response => response.json())
            .then(data => {
                resultsHeader.style.display = 'block';
                resultsDiv.style.display = 'block';

                if (Array.isArray(data) && data.length > 0) {
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
                } else {
                    resultsDiv.innerHTML = '<p>No results found.</p>';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultsDiv.innerHTML = '<p>An error occurred. Please try again later.</p>';
            });
    });
});

