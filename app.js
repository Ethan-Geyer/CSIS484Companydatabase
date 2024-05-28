$('form').on('submit', function(e) {
    e.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: '/update-profile',
        data: formData,
        success: function(response) {
            // Handle success...
            alert('Profile updated successfully!');
        },
        error: function(error) {
            // Handle error...
            console.log(error);
            alert('An error occurred.');
        }
    });
});
