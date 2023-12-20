$(document).ready(function() {
    // Generate random video on button click
    $('#generateVideoBtn').click(function() {
        // Array of YouTube video IDs
        var videoIds = [
            "3l2oi-X8P38",
            'Deqx-Xb-yHY',
            'fTxI3mRWTSw',
            'kC7g_9OiHcI',
            'yVXkR4Z4GSg',
            'Z4WHIJTCFs0',
            'KYNFqmu2toI',
            'f6NUQeb5noM',
            'lO9Fk2mjhbw',
            'QZIR5jDMY0Y',
            'bTNiweGySc4',
            '75Wxkx1Y5Bg',
            'ab5WvwfLuLM',
            'hCYPeuEWUbI',
            '4Tk2uG4oB3Q',
            'WicS_5aTffs',
            'yke02BDVMEA',
            'rMRn4bniZyU',
            'Q0TCYu1FiQc',
            'BDKgo3jFwFE',
            'ZhgZoPczQF4',
            'a9RGU356Mi0',
            'zatUernhzNw',
            'n45nrfwX1H4',
            'qkP2F7kWn7A',
            'Q0CwNpMmUfY',
            '0xZ52mG1yIo',
            '02S8t0F1inc',
            '9XOt2Vh0T8w',
            'rF9ZIdEnZU0',
            'fbI1eJ_zAB8',
            '3e0tszep890',
            'Yfva6ETW8e8',
            'rVfS5FTVhDk',
            'H_yWxB9VW0c',
            'z0NgUhEs1R4',
            'H0fiQ4nMvS0',
            '21Ki96Lsxhc',
            'WsgdFFgHNpw',
            'aeoxg8hx-lc',
            'eeAWYVVvpPE',
            'rImxuuD_kwM',
            '3uItJuJeuDg',
            'uEEYbXVCoT0',
            'Ve1kmdHTY24',
            'am6jQEanzvA',
            '4ALGL4Hm5g8',
            'gV0CVX60Weg',
            '8yQsEA5tLd4',
            'IUgHMGb74ZM',
            'wkMMmlnDlZE',
            
        ];
 
        // Get a random video ID from the array
        var randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];
 
        // Set the source of the YouTube video player
        $('#youtubeVideo').attr('src', 'https://www.youtube.com/embed/' + randomVideoId + '?autoplay=1');
    });
});
