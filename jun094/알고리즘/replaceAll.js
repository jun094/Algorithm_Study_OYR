String.prototype.replaceAll = function (from, to) {
    if (from instanceof RegExp)
        if (!from.flags.includes) throw new TypeError('replaceAll must be called with a global RegExp');
        else return this.replace(from, to);
    else return this.replace(new RegExp(from.replace(/[\\^$*+?.():=!|{},\[\]]/g, '\\$&'), 'g'), to);
};
