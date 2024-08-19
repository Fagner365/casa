document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoUrl = document.getElementById('videoUrl').value;
    if (!videoUrl) return;

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = "Processing...";

    fetch(`https://api.vevioz.com/?url=${encodeURIComponent(videoUrl)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                const downloadLink = document.createElement('a');
                downloadLink.href = data.download_url;
                downloadLink.download = 'video.mp4';
                downloadLink.click();
                messageDiv.textContent = "Download started!";
            } else {
                messageDiv.textContent = "Failed to download video. Please check the URL.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            messageDiv.textContent = "An error occurred. Please try again.";
        });
});
