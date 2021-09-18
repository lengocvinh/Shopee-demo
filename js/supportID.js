function newID() {
    let id = '';
    // Lấy milisecond ở thời điểm hiện tại , 1s = 1000 milisecond
    id = Math.random().toString().substr(2, 10) +
        String(new Date().getTime());
    return id;
}