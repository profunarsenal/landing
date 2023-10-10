export const tabsModule = () => {
    const tabsButtons = document.querySelectorAll('.example__tab-button');
    const desktopPlayButton = document.querySelector('.example__video .example__video-button');
    const mobilePlayButtons = document.querySelectorAll('.example__tab .example__video-button');
    const allButtons = [desktopPlayButton, ...mobilePlayButtons];
    
    const createVideo = (button) => {
        const activeTab = document.querySelector('.example__tabs .active');
        const tabId = activeTab.getAttribute('id');
        const videoBlock = button.parentElement;
        const video = document.createElement('video');
        const source = document.createElement('source');

        video.setAttribute('controls', '');
        video.classList.add('example-video');
        source.setAttribute('src', `./assets/video/${tabId}.mov`);

        video.append(source);
        videoBlock.insertBefore(video, button);
        button.classList.add('play');
        video.play();
    };

    tabsButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', () => {
            const video = document.querySelector('.example-video');

            tabsButtons.forEach((button) => {
                button.parentElement.classList.remove('active');
            });

            tabButton.parentElement.classList.add('active');
            
            if (video) {
                video.remove();
            }
            
            allButtons.forEach((button) => {
                button.classList.remove('play');
            });
        });
    });

    allButtons.forEach((button) => {
        button.addEventListener('click', () => {
            createVideo(button);
        });
    });
};