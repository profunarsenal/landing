export const tabsModule = () => {
    const tabsButtons = document.querySelectorAll('.example__tab-button');
    const desktopVideos = document.querySelectorAll('.example__video video');
    const desktopPlayButton = document.querySelector('.example__video .example__video-button');
    const mobilePlayButtons = document.querySelectorAll('.example__tab .example__video-button');
    const mobileVideos = document.querySelectorAll('.example__tab-video video');

    const pauseVideos = (videos, button) => {
        videos.forEach((video) => {
            video.classList.remove('play');
            video.pause();
        });

        button.classList.remove('play');
    };

    tabsButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', () => {
            tabsButtons.forEach((button) => {
                button.parentElement.classList.remove('active');
            });

            tabButton.parentElement.classList.add('active');

            pauseVideos(desktopVideos, desktopPlayButton);
            pauseVideos(mobileVideos, tabButton.parentElement.querySelector('.example__video-button'));
        });
    });

    desktopPlayButton.addEventListener('click', () => {
        const activeTab = document.querySelector('.example__tabs .active');
        const tabId = activeTab.getAttribute('id');

        desktopVideos.forEach((video) => {
            const videoId = video.getAttribute('id');

            if (videoId === `video-${tabId}`) {
                video.classList.add('play');
                desktopPlayButton.classList.add('play');
                video.play();
            } else {
                video.classList.remove('play');
            }
        });
    });

    mobilePlayButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const video = button.parentElement.querySelector('video');
            video.classList.add('play');
            button.classList.add('play');
            video.play();
        });
    });
};