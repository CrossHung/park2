import CpItem from "./cp-item";

const CpList = ({ cpListData, onParkSelect }) => {
  return cpListData.map((park) => (
    <CpItem park={park} key={park.cpNo} onParkSelect={onParkSelect} />
  ));
};

export default CpList;
