var Storage = {
    get: function (key) {
        return wx.getStorageSync(key) || null;
    },

    set: function (key, data) {
        wx.setStorageSync(key, data);
    },

    clear: function (key) {
        wx.removeStorageSync(key);
    },
};

module.exports = Storage;
