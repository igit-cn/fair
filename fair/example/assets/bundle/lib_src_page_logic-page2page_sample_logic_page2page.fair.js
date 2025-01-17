GLOBAL['#FairKey#'] = (function (__initProps__) {
    const __global__ = this;

    function _Page2PageState() {
        const inner = _Page2PageState.__inner__;
        if (this == __global__) {
            return new _Page2PageState({__args__: arguments});
        } else {
            const args = arguments.length > 0 ? arguments[0].__args__ || arguments : [];
            inner.apply(this, args);
            _Page2PageState.prototype.ctor.apply(this, args);
            return this;
        }
    }

    _Page2PageState.__inner__ = function inner() {
        this.fairProps = __initProps__;
        this._count = null;
        this._name = null;
    };
    _Page2PageState.prototype = {
        onTapText: function onTapText() {
            const __thiz__ = this;
            with (__thiz__) {
                _count = _count + 1;
                setState('#FairKey#', function dummy() {
                });
            }
        }, onLoad: function onLoad() {
            const __thiz__ = this;
            with (__thiz__) {
                _name = fairProps.__op_idx__(`pageName`);
                _count = fairProps.__op_idx__(`_count`);
            }
        }, initState: function initState() {
            const __thiz__ = this;
            with (__thiz__) {
                fairProps = widget._props;
                onLoad();
            }
        },
    };
    _Page2PageState.prototype.ctor = function () {
        Object.prototype.ctor.call(this);
    };
    ;
    return _Page2PageState();
})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));
