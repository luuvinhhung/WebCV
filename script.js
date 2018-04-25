$(document).ready(function () {
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myPieChart = new Chart(ctx, {

        type: 'radar',
        data: {
            labels: ['C++', 'HTML, CSS, JS', 'Java', 'TypeScript'],
            datasets: [{
                label: 'Ngôn ngữ lập trình',
                data: [
                    20, 20, 20, 20
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderWidth: 2,
                borderColor: '#ED1C24',
                pointBackgroundColor: '#ED1C24',
            }],

        },
        options: {
            responsive: true
        }
    });

});
$(document).ready(function () {
    var ctx = document.getElementById('myChart2').getContext('2d');
    var myPieChart = new Chart(ctx, {

        type: 'radar',
        data: {
            labels: ['Làm việc nhóm', 'Tự học', 'Thuyết trình'],
            datasets: [{
                label: 'Kỹ năng mềm',
                data: [
                    20, 20, 20
                ],
                backgroundColor: 'rgb(153, 255, 153, 0.6)',
                borderWidth: 2,
                borderColor: '#33ff33',
                pointBackgroundColor: '#ED1C24',
            }],

        },
        options: {
            responsive: true
        }
    });

});

$(document).ready(function initMap() {
    var contentString = "8/12 Phạm Bân phường 13, quận 5, TP.HCM";
    var uluru = { lat: 10.749984, lng: 106.657665 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(map, marker);
});
function create() {
    var name = $('.contact input[name="name"]').val();
    var email = $('.contact input[name="email"]').val();

    if (name == "" || email == "") {
        toastr.options.closeButton = true;
        toastr.success('Tên hoặc email không được bỏ trống');
    } else {
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact",
            method: "POST",
            headers: {
                ContentType: "application/json"
            },
            data: {
                name: name,
                email: email,
                message: $('.contact textarea').val()
            },
            success: function (data) {
                toastr.options.closeButton = true;
                toastr.success('Submit thành công!');

            },
            error: function (err) {
                console.log(err);
            }
        });
    }
}

