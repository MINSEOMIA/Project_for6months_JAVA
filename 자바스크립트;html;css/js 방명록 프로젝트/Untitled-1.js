< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">

                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                                crossorigin="anonymous"></script>

                            <title>초미니홈피</title>

                            <link href="https://fonts.googleapis.com/css2?family=Single+Day&display=swap" rel="stylesheet"> <!--폰트링크 -->
                                <style>
                                    * {
                                        font - family: 'Single Day', cursive;
                                    font-size: 20px;
                                    font-weight: bold;
        }
                                    .mypic {
                                        width: 100%;
                                    height: 500px;

                                    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://pbs.twimg.com/media/FHs0S0yUUAA8Bao?format=jpg&name=4096x4096');
                                    background-position: center 30%;
                                    background-size: cover;

                                    color: pink;

                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: center;
        }

                                    .wrap {
                                        background - image: url('https://pbs.twimg.com/media/FBt4Jz8VkAEkhEP.jpg');
                                    background-size: cover;
                                    background-position: bottom;
                                    border-radius: 10px;
                                    margin: 20px auto 20px auto;
		}

                                    .mypost {
                                        width: 95%;
                                    max-width: 500px;
                                    margin: 20px auto 20px auto;
                                    border-radius: 10px;

                                    background-image: url('https://pbs.twimg.com/media/FTqULC4aMAA-8Mv.jpg:large');
                                    background-size: cover;
                                    background-position: center;
                                    border-radius: 10px;
                                    margin: 20px auto 20px auto;

                                    box-shadow: 0px 0px 3px 0px black;
                                    padding: 20px;
        }

        .mypost > button {
                                        margin - top: 15px;
        }

                                    .mycards {
                                        width: 95%;
                                    max-width: 500px;
                                    margin: auto;
                                    border-radius: 10px;
        
        }

        .mycards > .card {
                                        margin - top: 10px;
                                    margin-bottom: 10px;
                                    border-radius: 10px;
        }
                                </style>
                                <script>
                                    $(document).ready(function(){
                                        $.ajax({
                                            type: "GET",
                                            url: "https://data.seoul.go.kr/dataList/catalogView.do?infId=OC-11009&srvType=L&currentPageNo=1#",
                                            data: {},
                                            success: function (response) {
                                                $('#temp').text(response['temp'])
                                            }
                                        })
                                    });
                                    $(document).ready(function () {
                                        show_comment();
        });
                                    function save_comment() {
                                        let name = $('#name').val()
                                    let comment = $('#comment').val()

                                    $.ajax({
                                        type: "POST",
                                    url: "/homework",
                                    data: {'name_give':name, 'comment_give':comment},
                                    success: function (response) {
                                        alert(response["msg"])
                    window.location.reload()
                }
            });
        }
                                    function show_comment() {
                                        $('#comment-list').empty()
            $.ajax({
                                        type: "GET",
                                    url: "/homework",
                                    data: { },
                                    success: function (response) {
                                        let rows = response['comments']
                                    for (let i = 0; i < rows.length; i++) {
                                        let name = rows[i]['name']
                                    let comment = rows[i]['comment']

                                    let temp_html = `<div class="card">
                                        <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>${comment}</p>
                                                <footer class="blockquote-footer">${name}</footer>
                                            </blockquote>
                                        </div>
                                    </div>`
                                    $('#comment-list').append(temp_html)
                    }
                }
            });
        }
                                </script>
                            </head>
                            <body>
                                <div class="mypic">
                                    <h1> 콩순이 팬명록</h1>
                                    <p>실시간마음온도: <span id="temp">36</span>도</p>
                                </div>
                                <div class="wrap">
                                    <div class="mypost">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="name" placeholder="url">
                                                <label for="floatingInput">닉네임</label>
                                        </div>
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="comment"
                                                style="height: 100px"></textarea>
                                            <label for="floatingTextarea2">응원댓글</label>
                                        </div>
                                        <button onclick="save_comment()" type="button" class="btn btn-primary">응원 남기기</button> <!--버튼 부트스트랩 -->
                                    </div>

                                    <!--<div class="card mb-3">
                                        <img src="data:image/jpeg;base64,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" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">콩순이 콩!</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                        <img src="https://pbs.twimg.com/media/FBt4Jz8VkAEkhEP.jpg" class="card-img-bottom" alt="...">
                                    </div> -->

                                    <div class="mycards" id="comment-list">
                                        <div class="card">
                                            <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                    <p>새로운 앨범 너무 멋져요!</p>
                                                    <footer class="blockquote-footer">마멜짱</footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                    <p>새로운 앨범 너무 멋져요!</p>
                                                    <footer class="blockquote-footer">마멜짱</footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                    <p>새로운 앨범 너무 멋져요!</p>
                                                    <footer class="blockquote-footer">마멜짱</footer>
                                                </blockquote>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </body>