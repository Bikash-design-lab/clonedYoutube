// const API_KEY = "AIzaSyC0y_YOAvPOqRafSDsEyIsyYcSqK129Uvk";
// const API_KEY = "AIzaSyCSyhDA636wxbh5l0aTwnrjriCJ3jPGbdc"
const API_KEY = "AIzaSyCzIdVeyZgp3HC3gN8cHn1gmUnoBEIwKN4"
async function fetchVideosByQuery(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${API_KEY}&maxResults=50&type=video`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items || [];
}

function displayVideos(videos) {
    const container = document.getElementById('video-container');
    container.innerHTML = '';

    videos.forEach(video => {
        const videoId = video.id?.videoId;
        if (!videoId) return;

        const { title, description, thumbnails, channelTitle } = video.snippet;

        const videoCard = document.createElement('div');
        videoCard.className =
            "bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300";

        videoCard.innerHTML = `
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                        <img class="w-full h-48 object-cover" src="${thumbnails?.medium?.url || ''}" alt="${title}">
                        <div class="p-4">
                            <h3 class="text-base font-semibold mb-1 truncate" title="${title}">${title}</h3>
                            <p class="text-sm text-gray-700 line-clamp-2 mb-2">${description || 'No description.'}</p>
                            <span class="text-xs text-gray-500">Channel: ${channelTitle}</span>
                        </div>
                    </a>
                `;

        container.appendChild(videoCard);
    });
}

document.getElementById('searchForm').addEventListener('input', async (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;
    const videos = await fetchVideosByQuery(query);
    displayVideos(videos);
});

// Initial load
fetchVideosByQuery("coding tutorials").then(displayVideos);
