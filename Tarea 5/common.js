class Common {
    msg = '';

    setMessage(p) {
        this.msg = p;
    }
    
    getMessage() {
        return this.msg;
    }
}

// module.exports = function(param) {
//     if (param) msg = param;
//     return msg;
// }

module.exports = new Common();