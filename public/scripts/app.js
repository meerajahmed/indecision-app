"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Component state -> allow component to manage some component data.
 * whenever the component data changes the component will re-render to reflect those changes
 * */

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    //1. set default state
    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: props.count
    };
    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var strCount = localStorage.getItem("count");
      var count = parseInt(strCount, 10);
      if (!isNaN(count)) {
        this.setState(function () {
          return { count: count };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
      }
    }
  }, {
    key: "addOne",
    value: function addOne() {
      this.setState(function (previousState) {
        return {
          count: previousState.count + 1
        };
      });
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      this.setState(function (previousState) {
        return {
          count: previousState.count - 1
        };
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Count: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.addOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.minusOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.reset },
          "reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(React.createElement(Counter, { count: -10 }), document.getElementById("app"));
