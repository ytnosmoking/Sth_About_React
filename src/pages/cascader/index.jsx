import React, { Component } from "react";
import { Cascader, Divider, Icon, DatePicker } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(`date====${date}`);
  console.log(`dateString====${dateString}`);
}

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake"
                }
              ]
            }
          ]
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men"
                }
              ]
            }
          ]
        }
      ],
      options1: [
        {
          val: "val-1",
          key: "key-1",
          child: [
            {
              val: "val-11",
              key: "key-11",
              child: [
                {
                  val: "valu-111",
                  key: "key-111"
                }
              ]
            }
          ]
        },
        {
          val: "val-2",
          key: "key-2",
          child: [
            {
              val: "val-22",
              key: "key-22",
              child: [
                {
                  val: "val-222",
                  key: "key-222"
                }
              ]
            }
          ]
        }
      ]
    };
  }
  onChange = value => {
    console.log(value);
  };

  render() {
    const { options, options1 } = this.state;
    return (
      <div>
        <Divider />
        <Cascader
          style={{ width: 300 }}
          options={options}
          onChange={this.onChange}
          suffixIcon={<Icon type="filter" />}
        />
        <Divider>fieldNames</Divider>
        <Cascader
          style={{ width: 300 }}
          options={options1}
          onChange={this.onChange}
          fieldNames={{
            label: "key",
            value: "val",
            children: "child"
          }}
          suffixIcon={<Icon type="filter" />}
        />
        <Divider>DatePicker</Divider>
        <DatePicker
          style={{ width: 300 }}
          onChange={onChange}
          format="YYYY-MM-DD HH:mm:ss"
        />
        <br />
        <RangePicker style={{ width: 300 }} onChange={onChange} />
        <br />
        <WeekPicker style={{ width: 300 }} onChange={onChange} />
        <br />
        <MonthPicker style={{ width: 300 }} onChange={onChange} />
      </div>
    );
  }
}

export default index;
