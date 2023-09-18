import { Col, Row, DatePicker, Select, Switch, Radio, Checkbox, TimePicker } from 'antd';
import './Home.css';
import type { DatePickerProps } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';


export const Home: React.FC = () => {

   console.log('test');
   const calendarTypes = [
      { label: 'Test Type', value: 'TestValue' }
   ];

   


   const holidayList = [{
      id: 1,
      holidayName: 'Christmas',
      holidayDate: '25th Dec, 2023'   
   }, {
      id: 2,
      holidayName: 'New Year Eve',
      holidayDate: '30th Dec, 2023'
   }, {
      id: 3,
      holidayName: 'Thanks Giving',
      holidayDate: '31st Dec, 2023'
   }];

   const dateFormat = 'YYYY/MM/DD';


   const [showExcludedHolidays, setShowExcludedHolidays] = useState(false);
   const [exceptions, setExceptions] = useState<any>([]);

   const getStartAndEndDateTimeDiv = () => {
     return (
      <>
         <Row className='inputContainer'>
               <Col span={24}>
                  <Checkbox onChange={() => { }}>Does not repeat</Checkbox>
               </Col>
            </Row>
            <Row className='inputContainer' gutter={[16, 16]}>
               <Col className='dateRow' span={12}>
                  <label>
                     Start Date:
                  </label>
                  <DatePicker format={dateFormat} />
               </Col>
               <Col className='dateRow' span={12}>
                  <label>
                     End Date:
                  </label>
                  <DatePicker format={dateFormat} />
               </Col>
            </Row>
      </>
     );
   }

   const getTimeInputsDiv = () => {
      return (
         <>
            <Row className='inputContainer'>
                  <Col span={24}>
                     <Checkbox onChange={() => { }}>Does not end</Checkbox>
                  </Col>
               </Row>
               <Row className='inputContainer' gutter={[16, 16]}>
                  <Col className='dateRow' span={12}>
                     <label>
                        Start Time:
                     </label>
                     <TimePicker use12Hours format="h:mm:ss A" onChange={()=> {}} />
                  </Col>
               </Row>
         </>
        )
   }

   const addNewException = () => {
      console.log('Exception')
      exceptions.push({});
      setExceptions([...exceptions]);
      console.log(exceptions.length);
   }

   const onExcludeTechnicalHoliday = (event: any) => {
      setShowExcludedHolidays(event);
   }

   const toggleCheckedHolidayList = (event: any, holidayId: number) => {
      console.log(holidayId, event);
   }

   // new method
   const getHolidaySection = () => {
      console.log('Test');
      return (
         <Row>
         { holidayList.map((holiday: any, index: number) => {
            return (
            <Col className={'holidayRow'} key={index} span={12}>
                <Checkbox defaultChecked onChange={(event) => toggleCheckedHolidayList(event, holiday.id)}>
                  <span>{holiday.holidayName}</span>  
                </Checkbox>
                <span>
                  {holiday.holidayDate}
                </span>
            </Col>
            )

         })}
         </Row>
      );
       
   }

   // new method
   const getExceptionsHTML = () => {
      return (
         exceptions.map((exception: any, index: any) => {
            return (
               <Row className='exceptionRow' key={index} gutter={[16, 16]}>
                  <Col span={6}>
                     <label>
                        Exception date:
                     </label>
                     <DatePicker format={dateFormat} />
                  </Col>
                  <Col span={5}>
                     <label>
                        Exception date:
                     </label>
                     <DatePicker format={dateFormat} />
                  </Col>
                  <Col span={5}>
                    <label>
                        Exception date:
                     </label>
                     <Select
                     defaultValue={''}
                     style={{ width: '100%' }}
                     onChange={() => { }}
                     placeholder={'Select'}
                     options={calendarTypes}/>
                  </Col>
                  <Col span={6}>
                    <label>
                        Exception date:
                     </label>
                     <Select
                     defaultValue={''}
                     style={{ width: '100%' }}
                     onChange={() => { }}
                     placeholder={'Select'}
                     options={calendarTypes}/>
                  </Col>
                  <Col onClick={() => removeException(index)} className='deleteIconDiv' span={2}>
                   <DeleteOutlined />
                  </Col>
                  
               </Row>
            );
         })
      );
   }

   //new method
   const removeException = (index: number) => {
      console.log(exceptions, index);
      exceptions.splice(index, 1);
      setExceptions([...exceptions]);
   }

   const calendarExceptionsSection = () => {
      return (
         <>
            <div className='formHeader'>
               <span className='formTitle'>CALENDAR EXCEPTION</span>
               <span>
                  <span className='superCalendarText'>Exclude technical holiday</span>
                  <Switch onChange={onExcludeTechnicalHoliday} />
               </span>
            </div>
            {/**newly added section */}
            {showExcludedHolidays && getHolidaySection()}
            <Row className='inputContainer'>
               <Col className='add-exception-text' span={24}>
                  <PlusOutlined/>
                  <span onClick={addNewException}>Add Exception</span>
               </Col>
               
            </Row>

            {/** newly added section */}
            {exceptions.length > 0 && getExceptionsHTML()}

            <Row className='formHeader'>
               <Col span={24}>
                  <span className='formTitle'>Create Exception</span>
               </Col>
               
            </Row>
         </>
      )
   }


   const getFormHTML = () => {
      return (
         <div className={'formContainer'}>

            <div className={'formHeader'}>
               <span className='formTitle'>DETAIL</span>
               <span>
                  <span className='superCalendarText'>Super Calendar</span>
                  <Switch onChange={() => { }} />
               </span>
            </div>
            <Row className='inputContainer' gutter={[16, 16]}>
               <Col span={12}>
                  <label>
                     Calendar Type:
                  </label>
                  <Select
                     defaultValue={''}
                     style={{ width: '100%' }}
                     onChange={() => { }}
                     placeholder={'Select'}
                     options={calendarTypes}
                  />
               </Col>
               <Col span={12}>
                  <label>
                     Unique Identifier (optional):
                  </label>
                  <Select
                     defaultValue={''}
                     style={{ width: '100%' }}
                     onChange={() => { }}
                     placeholder={'Select'}
                     options={calendarTypes}
                  />
               </Col>
            </Row>

            <Row className='inputContainer' gutter={[16, 16]}>
               <Col span={8}>
                  <label>
                     Calendar Type:
                  </label>

               </Col>
               <Col span={16}>
                  <Select
                     defaultValue={''}
                     style={{ width: '100%' }}
                     onChange={() => { }}
                     placeholder={'Select'}
                     options={calendarTypes}
                  />
               </Col>
            </Row>

            <div className='formHeader'>
               <span className='formTitle'>NORMAL SCHEDULE</span>
               <span>
                  <span className='superCalendarText'>Event request</span>
                  <Switch onChange={() => { }} />
               </span>
            </div>

            <Row className='inputContainer'>
               <Col span={24}>
                  <label>Event occurs</label>
               </Col>
               <Col span={24}>
                  <Radio.Group defaultValue="a" buttonStyle="solid">
                     <Radio.Button value="mon">Mon</Radio.Button>
                     <Radio.Button value="tue">Tue</Radio.Button>
                     <Radio.Button value="wed">Wed</Radio.Button>
                     <Radio.Button value="thu">Thu</Radio.Button>
                     <Radio.Button value="fri">Fri</Radio.Button>
                     <Radio.Button value="sat">Sat</Radio.Button>
                     <Radio.Button value="sun">Sun</Radio.Button>
                  </Radio.Group>
               </Col>
            </Row>

            <Row className='inputContainer'>
               <Col span={24}>
                  <Checkbox onChange={() => { }}>Irregular Schedule</Checkbox>
               </Col>
            </Row>
            <Row className='inputContainer' gutter={[16, 16]}>
               <Col span={12}>
                  <label>
                     Repeats:
                  </label>
                  <Select
                     defaultValue={''}
                     style={{ width: '100%' }}
                     onChange={() => { }}
                     placeholder={'Select'}
                     options={calendarTypes}
                  />
               </Col>
               <Col span={12}>
                  <label>
                     Every:
                  </label>
                  <Select
                     defaultValue={''}
                     style={{ width: '100%' }}
                     onChange={() => { }}
                     placeholder={'Select'}
                     options={calendarTypes}
                  />
               </Col>
            </Row>


            {getStartAndEndDateTimeDiv()}
            {getTimeInputsDiv()}
            {calendarExceptionsSection()}

         </div>
      )
   }


   return (


      <div className={'container'}>
         <Row>
            <Col span={24}>
               <h3>Add Calendar</h3>
            </Col>
         </Row>
         <Row>
            <Col span={12}>{getFormHTML()}</Col>
            <Col span={12}>Test</Col>
         </Row>

      </div>);
}

export default Home;