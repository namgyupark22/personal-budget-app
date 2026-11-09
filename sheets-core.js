// Pure mapping helpers, shared by the browser adapter and fixture tests.
(function(root){
const value=c=>c?.effectiveValue?Object.values(c.effectiveValue)[0]:'';
const entered=c=>c?.userEnteredValue?Object.values(c.userEnteredValue)[0]:'';
function grid(sheet){const rows=[];for(const d of sheet.data||[])for(let i=0;i<(d.rowData||[]).length;i++){const r=(d.startRow||0)+i;rows[r]||=[];for(let j=0;j<(d.rowData[i].values||[]).length;j++)rows[r][(d.startColumn||0)+j]=d.rowData[i].values[j];}return rows;}
function cells(g,row,col,h,w){return Array.from({length:h},(_,i)=>Array.from({length:w},(_,j)=>g[row-1+i]?.[col-1+j]||{}));}
function vals(g,r,c,h,w,display=false){return cells(g,r,c,h,w).map(row=>row.map(x=>display?(x.formattedValue??String(value(x))):value(x)));}
function fingerprint(row){return JSON.stringify(row.map(entered));}
function populated(row){return row.some((c,i)=>i!==6&&(i!==10||!c.userEnteredValue?.formulaValue)&&entered(c)!==''&&entered(c)!==false&&entered(c)!==0);}
root.BudgetCore={value,entered,grid,cells,vals,fingerprint,populated};
})(typeof window==='undefined'?globalThis:window);
