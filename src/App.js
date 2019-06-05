import React from 'react';
import ReactDOM from 'react-dom';

// import logo from './logo.svg';
import './App.css';


class CalendarHeader extends React.Component {
    handleLeftClick() {
      let year = this.props.year;
      let month = this.props.month;
  
      month = month - 1;
      if (month < 1) {
        year = year - 1;
        month = 12;
      }
      this.props.updateFilter(year, month);
    }
    handleRightClick() {
      let year = this.props.year;
      let month = this.props.month;
      month = month + 1;
      if (month > 12) {
        year = year + 1;
        month = 1;
      }
  
      this.props.updateFilter(year, month);
    }
    render() {
      return (
        <div>
          <div className="headerborder">
            <div className="bar">
              <p>
                {this.props.year}-{this.props.month}-{this.props.day}
              </p>
              <p
                className="triangle-left"
                onClick={this.handleLeftClick.bind(this)}
              >
                {" "}
              </p>
              <p
                className="triangle-right"
                onClick={this.handleRightClick.bind(this)}
              >
                {" "}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
  class CalendarBody extends React.Component {
    getMonthDays() {
      let year = this.props.year;
      let month = this.props.month;
      let temp = new Date(year, month, 0);
  
      return temp.getDate();
    }
  
    getFirstDayWeek() {
      //根据年月返回当月1号是星期几
      let year = this.props.year;
      let month = this.props.month;
  
      let dt = new Date(year + "/" + month + "/1");
      let weekdays = dt.getDay();
      return weekdays;
    }
    render() {
      let arry1 = [];
      let arry2 = [];
      let getDays = this.getMonthDays();
      let FirstDayWeek = this.getFirstDayWeek();
      let curday = this.props.day;
  
      for (let i = 0; i < FirstDayWeek; i++) {
        arry1[i] = i;
      }
      for (let i = 0; i < getDays; i++) {
        arry2[i] = i + 1;
      }
  
      let node1 = arry1.map(function(item) {
        return <li />;
      });
      let node2 = arry2.map(function(item) {
        return curday === item ? (
          <li
            style={{
              "background-color": "rgb(42,87,157)",
              "border-radius": "50%"
            }}
          >
            {item}
          </li>
        ) : (
          <li>{item}</li>
        );
      });
  
      return (
        <div>
          <div className="weekday">
            <ul>
              <li>日</li>
              <li>一</li>
              <li>二</li>
              <li>三</li>
              <li>四</li>
              <li>五</li>
              <li>六</li>
            </ul>
          </div>
          <div className="CalendarDay">
            <ul>
              {node1}
              {node2}
            </ul>
  
            <img
              className="dropBtn"
              src="https://s2.ax1x.com/2019/04/26/EnWQOg.png"
              alt="下拉按钮.jpg"
              border="0"
            />
            <img
              className="upBtn active"
              src="https://s2.ax1x.com/2019/04/26/EnW1mQ.png"
              alt="上拉按钮.jpg"
              border="0"
            />
  
            <div />
          </div>
        </div>
      );
    }
  }
  
  class CalendarControl extends React.Component {
    constructor() {
      super();
      let newDate = new Date();
      this.state = {
        year: newDate.getFullYear(),
        month: newDate.getMonth() + 1,
        day: newDate.getDate()
      };
    }
    handleFilterUpdate(filterYear, filterMonth) {
      this.setState({
        year: filterYear,
        month: filterMonth
      });
    }
    render() {
      return (
        <div>
          <CalendarHeader
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
            updateFilter={this.handleFilterUpdate.bind(this)}
          />
          <CalendarBody
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
          />
        </div>
      );
    }
  }
  
  class Reminder extends React.Component {
    render() {
      return (
        <div>
          <ReminderHeader />
          <ReminderBody />
        </div>
      );
    }
  }
  class ReminderHeader extends React.Component {
    render() {
      return (
        <div className="reminderHeader">
            <span className="active">已设置提醒</span>
            <span>创建时间</span>
            <span>最后发言时间</span>
        </div>
      );
    }
  }
  
  class ReminderBody extends React.Component {
    render() {
      return (
        <div className="schedule">
          <article class="scheduleList">
            <h5>227市场</h5>
            <p>定价依据和角色判定</p>
            <footer className="operator">我的角色：经办人 </footer>
          </article>
          <article class="scheduleList">
            <h5>新软件</h5>
            <p>成立体验小组，测试软件</p>
            <footer className="assigned">我的角色：交办人 </footer>
          </article>
          <article class="scheduleList">
            <h5>2-3-6手提项目</h5>
            <p>2366手提灭火器项目，10月需要提交给需求方</p>
            <footer className="assigned">我的角色：交办人 </footer>
          </article>
          <article class="scheduleList">
            <h5>消防资格考试</h5>
            <p>考试纲要 考试时间 考试地点</p>
            <footer className="operator">我的角色：经办人 </footer>
          </article>
          <article class="scheduleList">
            <h5>总裁办招新</h5>
            <p>招新人</p>
            <footer className="operator">我的角色：经办人 </footer>
          </article>
        </div>
      );
    }
  }
  

  

  function App() {
    return (
      <div className="App">
        <CalendarControl />
        <Reminder />
      </div>
    );
  }
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  

export default App;