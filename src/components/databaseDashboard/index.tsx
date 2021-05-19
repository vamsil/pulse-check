import { Column } from 'primereact/components/column/Column';
import { DataTable } from 'primereact/datatable';

const data = [
  {
    tableSpaceName: '10', 
    totalSpace: '11',
    usedSpace: '12',
    availableSpace: '13',
    percentageTime: '14'
  },
  {
    tableSpaceName: '20', 
    totalSpace: '21',
    usedSpace: '22',
    availableSpace: '23',
    percentageTime: '24'
  },
  {
    tableSpaceName: '30', 
    totalSpace: '31',
    usedSpace: '32',
    availableSpace: '33',
    percentageTime: '34'
  },
  {
    tableSpaceName: '40', 
    totalSpace: '41',
    usedSpace: '42',
    availableSpace: '43',
    percentageTime: '44'
  },
  {
    tableSpaceName: '50', 
    totalSpace: '51',
    usedSpace: '52',
    availableSpace: '53',
    percentageTime: '54'
  },
  {
    tableSpaceName: '60', 
    totalSpace: '61',
    usedSpace: '62',
    availableSpace: '63',
    percentageTime: '64'
  },
  {
    tableSpaceName: '70', 
    totalSpace: '71',
    usedSpace: '72',
    availableSpace: '73',
    percentageTime: '74'
  },
  {
    tableSpaceName: '80', 
    totalSpace: '81',
    usedSpace: '82',
    availableSpace: '83',
    percentageTime: '84'
  },
];

export default function DatabaseDashboard() {
  return (
    <div className="database-dashboard">
      <div>
        <h3>Oracle Database Version Info</h3>
        <div>Oracle database 64 bit production info</div>
        <br />
        <br />
        <DataTable value={data}>
          <Column field="tableSpaceName" header="Table Space Name"></Column>
          <Column field="totalSpace" header="Total Space"></Column>
          <Column field="usedSpace" header="Used Space"></Column>
          <Column field="availableSpace" header="Available Space"></Column>
          <Column field="percentageTime" header="Perentage Time"></Column>
        </DataTable>
        <br /><br /><br />
      </div>
    </div>
  )
}
