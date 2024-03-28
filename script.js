$(document).ready(function() {
    // When a photo is clicked
    $('.photo').click(function() {
        var imageUrl = $(this).find('img').attr('src');
        showFullScreenImage(imageUrl);
    });

    // Function to display image in full screen
    function showFullScreenImage(imageUrl) {
        var fullScreenDiv = $('<div class="full-screen-image-overlay"></div>');
        var imageElement = $('<img src="' + imageUrl + '">');
        fullScreenDiv.append(imageElement);
        fullScreenDiv.appendTo('body').fadeIn();

        // Close full screen image on click
        fullScreenDiv.click(function() {
            $(this).fadeOut(function() {
                $(this).remove();
            });
        });
    }
});
