import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Resizable } from "re-resizable";
import './Resize.css';
export default function MultiSelectTreeView() {
    const [width, setWidth] = React.useState(230);
    const [height, setHeight] = React.useState(30);
  return (
    <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      sx={{width:230, height: '100vh', flexGrow: 1}}
    >
      <TreeItem className='Tree1' nodeId="1" label="Category 1">

      <Resizable
      className='resize'
      
      defaultSize={{
        width:'auto',
        height:'auto',
      }}
      onResizeStop={(e, direction, ref, d) => {
        setHeight(height + d.height);
      }}
      enable={{top:false, right:false, bottom:true, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}>
        <TreeItem nodeId="2" label="Folder1" />
        <TreeItem nodeId="3" label="Folder2">
            <TreeItem nodeId="4" label="File1" /> 
            <TreeItem nodeId="5" label="File2" /> 
            <TreeItem nodeId="6" label="File3" /> 
            <TreeItem nodeId="7" label="File4" /> 
            <TreeItem nodeId="8" label="File5" /> 
            <TreeItem nodeId="9" label="File6" /> 
            <TreeItem nodeId="10" label="File7" /> 
            <TreeItem nodeId="11" label="File8" /> 
            <TreeItem nodeId="12" label="File9" /> 
            <TreeItem nodeId="13" label="File10" /> 
        </TreeItem>
        </Resizable>
      </TreeItem>
      
      <TreeItem nodeId="14" label="Category 2">
        <TreeItem nodeId="15" label="Folder1" />
        <TreeItem nodeId="16" label="Folder2">
            <TreeItem nodeId="17" label="File1" /> 
            <TreeItem nodeId="18" label="File2" /> 
            <TreeItem nodeId="19" label="File3" /> 
            <TreeItem nodeId="20" label="File4" /> 
            <TreeItem nodeId="21" label="File5" /> 
            <TreeItem nodeId="22" label="File6" /> 
            <TreeItem nodeId="23" label="File7" /> 
            <TreeItem nodeId="24" label="File8" /> 
            <TreeItem nodeId="25" label="File9" /> 
            <TreeItem nodeId="26" label="File10" /> 
        </TreeItem>
      </TreeItem>

    </TreeView>

  );
}