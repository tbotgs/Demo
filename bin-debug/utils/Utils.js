var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    // Dictionary From https://stackoverflow.com/questions/15877362/declare-and-initialize-a-dictionary-in-typescript with a few modification.
    var Dictionary = (function () {
        function Dictionary() {
            this._keys = [];
            this._values = [];
            this._count = 0;
        }
        Object.defineProperty(Dictionary.prototype, "Count", {
            get: function () {
                return this._count;
            },
            enumerable: true,
            configurable: true
        });
        Dictionary.prototype.Add = function (key, value) {
            this[key] = value; // Create a varaible in this class?
            this._keys.push(key);
            this._values.push(value);
            this._count++;
        };
        Dictionary.prototype.Remove = function (key) {
            var index = this._keys.indexOf(key, 0);
            if (index !== -1) {
                this._keys.splice(index, 1);
                this._values.splice(index, 1);
                delete this[typeof (key)];
                this._count--;
            }
        };
        Dictionary.prototype.RemoveAll = function () {
            for (var i = 0; i < this._keys.length; i++) {
                delete this[typeof (this._keys[i])];
                this._count--;
            }
            this._keys.splice(0);
            this._values.splice(0);
        };
        Dictionary.prototype.Set = function (key, value) {
            if (this.ContainsKey(key)) {
                var index = this._keys.indexOf(key, 0);
                this._values[index] = value;
            }
        };
        Dictionary.prototype.ContainsKey = function (key) {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        };
        Dictionary.prototype.GetValue = function (key) {
            if (this.ContainsKey(key)) {
                var index = this._keys.indexOf(key, 0);
                return this._values[index];
            }
            return null;
        };
        Dictionary.prototype.Keys = function () {
            return this._keys;
        };
        Dictionary.prototype.Values = function () {
            return this._values;
        };
        return Dictionary;
    }());
    utils.Dictionary = Dictionary;
    __reflect(Dictionary.prototype, "utils.Dictionary", ["IDictionary"]);
})(utils || (utils = {}));
//# sourceMappingURL=Utils.js.map