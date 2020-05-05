import React from 'react';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { DataManager, UrlAdaptor  } from '@syncfusion/ej2-data';
import { ScheduleComponent, ViewsDirective, ViewDirective,Resize, DragAndDrop, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './App.css';

export default class App extends React.Component<{}, {}> {

  public scheduleObj: ScheduleComponent = new ScheduleComponent({});
  public dataManager = new DataManager({
    url: 'http://localhost:54738/Home/LoadData', // Here need to mention the web api sample running path
      crudUrl: 'http://localhost:54738/Home/UpdateData',
      crossDomain: true,
      adaptor: new UrlAdaptor
  });

  public render() {
    return (
      <div className="control-section">
        <div className="schedule-control">
          <ScheduleComponent height='650px' ref={(schedule: ScheduleComponent) => this.scheduleObj = schedule} selectedDate={new Date(2019, 0, 10)} eventSettings={{ dataSource: this.dataManager }} >
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
          </ScheduleComponent>
        </div>
      </div>
    );
  }
}
