// new WOW().init();

var service = new Service();

document.querySelector(".loadingText").style.display = "none";

// Call API
function getMembersAPI() {
    //show loading
    document.querySelector(".loadingText").style.display = "block";

    service.getListMember()
        .then(function (result) {
            document.querySelector(".loadingText").style.display = "none";
            renderMembers(result.data);
        })
        .catch(function (error) {
            console.log(error);
            document.querySelector(".loadingText").querySelector("p").innerHTML =
                "An error occurred! Please come back later";
        });
}
getMembersAPI();

function renderMembers(listMember) {
    var content = '';
    listMember.forEach(function (member) {
        if (member.userType === "Teacher") {
            content += `
        <div class="col-lg-3 col-sm-6 col-12">
            <div class="card teacher__card animate__animated animate__fadeIn">
                <div class="teacher__img">
                    <img class="card-img-top" src="./images/${member.avatar}" alt="" />
                </div>
                <div class="card-body text-center">
                    <h1 class="teacher__language">${member.language}</h6>
                    <h1 class="card-title teacher__name">${member.fullName}</h1>
                    <p class="card-text teacher__info">${member.description}</p>
                </div>
            </div>
        </div>
        `;
        }
    });
    document.getElementById("teacherList").innerHTML = content;
}