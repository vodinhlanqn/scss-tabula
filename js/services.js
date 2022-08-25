function Service() {
    this.getListMember = function () {
        return axios({
            url: "https://62ff796334344b6431fa3ac2.mockapi.io/api/members",
            method: "GET"
        })
    };
}
