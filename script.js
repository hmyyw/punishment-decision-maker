let parts = ["臀部", "臀部", "臀部", "臀部", "臀部", "臀部", "臀部", "臀部", "臀部", "臀部", "脚心", "大腿前后侧", "手心", "手心", "手心", "脚心", "臀缝", "臀腿", "大腿内侧", "大腿前后侧"];
let tools = [
    "手", 
    "数据线", 
    "衣架", 
    "发刷", 
    "浴刷", 
    "胡桃木戒尺", 
    "镜面戒尺", 
    "玉竹竹板", 
    "藤条", 
    "小黑棍", 
    "小红", 
    "散鞭", 
    "红色皮带", 
    "胡桃木教棍",
    "细竹条",
    "软质皮拍", 
    "粉红猫爪拍", 
    "黑色猫爪拍", 
    "戒尺拍", 
    "方形拍", 
    "自选工具（主定）", 
    "自选工具（贝定）"
];
let poses = [
    "OTK",
    "平趴",
    "平趴（分腿）",
    "跪趴",
    "跪趴（分腿）",
    "跪趴上身压低",
    "跪趴上身压低（分腿）",
    "趴床边",
    "趴桌子（踮起脚尖）",
    "扶墙翘臀",
    "尿布式（固定双手）",
    "直立跪椅/沙发",
    "跪床撑地",
    "站立扶膝",
    "撑床站立",
    "弯腰手握脚踝（分腿）",
    "弯腰抱膝（固定双手）",
    "面对镜子",
    "自选姿势（主定）",
    "自选姿势（贝定）"
];
let numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let penalties = [
    "本次数量加倍",
    "本次数量减半（向上取整）",
    "免除本次惩罚",
    "重新抽取部位",
    "重新抽取姿势",
    "重新抽取工具",
    "重新抽取数量",
    "重新抽取部位+姿势+工具+数量",
    "自选附加项（主定）",
    "自选附加项（贝定）",
    "抽取额外部位",
    "抽取额外姿势",
    "抽取额外工具",
    "抽取额外数量",
    "每样工具5下",
    "每种姿势5下",
    "贝挑选一件工具打主屁股5下",
    "主请贝吃小蛋糕",
    "戴眼罩",
    "戴口球",
    "戴铃铛项圈",
    "戴肛塞",
    "束缚手脚",
    "报数，每错一次另加5下",
    "倒着报数，每错一次另加5下",
    "报数，逢3的倍数或含3的数改成汪，每错一次另加5下",
    "姿势改为双手抱膝脚后跟离地，如落地则剩余数目翻倍（限一次）",
    "姿势改为站立，双手伸直平举一杯水，若撒出则加20下",
    "姿势改为手扶墙，脚不能移动位置，否则加10下",
    "贝蒙眼猜工具，猜对10下，猜错20下（两次机会）",
    "不许发出任何声音，否则加20下",
    "臀部夹6个夹子，用散鞭抽掉（不计数量）",
    "臀部夹6个夹子做10次蹲起，期间每掉一个加5下",
    "结束后罚跪晾臀3分钟（双手平举工具，乱动或姿势不标准则用该工具加打20下）",
    "结束后跪趴晾臀3分钟 （屁股翘到最高并放工具，掉落则用该工具加打20下）",
    "DIY完成惩罚并大声报数（选择合适姿势）",
    "全裸受罚（褪去所有衣物）",
    "允许穿内裤受罚",
    "手捧工具，褪去衣物摆好姿势主动请罚",
    "打小腿（x下）",
    "掐大腿内侧1分钟（若不配合则任意工具sp10）",
    "掐臀1分钟（若不配合则任意工具sp10）",
    "双手抱头，私处调教1分钟（若不配合则任意工具sp10）",
    "M姿势开腿散鞭抽私处（x下）"
];


function decide(type) {
    let choice;
    switch(type) {
        case 'part':
            choice = parts[Math.floor(Math.random() * parts.length)];
            document.getElementById("partResult").innerText = `部位: ${choice}`;
            break;
        case 'tool':
            choice = tools[Math.floor(Math.random() * tools.length)];
            document.getElementById("toolResult").innerText = `工具: ${choice}`;
            break;
        case 'pose':
            choice = poses[Math.floor(Math.random() * poses.length)];
            document.getElementById("poseResult").innerText = `姿势: ${choice}`;
            break;
        case 'number':
            choice = numbers[Math.floor(Math.random() * numbers.length)];
            document.getElementById("numberResult").innerText = `数量: ${choice}`;
            break;
        case 'penalty':
            choice = penalties[Math.floor(Math.random() * penalties.length)];
            document.getElementById("penaltyResult").innerText = `附加项: ${choice}`;
            break;
    }
}

function addItem() {
    let newItem = document.getElementById("newItem").value;
    let librarySelect = document.getElementById("librarySelect").value;

    if (newItem === "") {
        alert("Please enter an item.");
        return;
    }

    switch(librarySelect) {
        case 'parts':
            parts.push(newItem);
            break;
        case 'tools':
            tools.push(newItem);
            break;
        case 'poses':
            poses.push(newItem);
            break;
        case 'penalties':
            penalties.push(newItem);
            break;
    }

    document.getElementById("newItem").value = "";
    alert(`${newItem} added to ${librarySelect} library.`);
}

function removeItem() {
    let newItem = document.getElementById("newItem").value;
    let librarySelect = document.getElementById("librarySelect").value;

    if (newItem === "") {
        alert("Please enter an item.");
        return;
    }

    let index;
    switch(librarySelect) {
        case 'parts':
            index = parts.indexOf(newItem);
            if (index > -1) {
                parts.splice(index, 1);
            }
            break;
        case 'tools':
            index = tools.indexOf(newItem);
            if (index > -1) {
                tools.splice(index, 1);
            }
            break;
        case 'poses':
            index = poses.indexOf(newItem);
            if (index > -1) {
                poses.splice(index, 1);
            }
            break;
        case 'penalties':
            index = penalties.indexOf(newItem);
            if (index > -1) {
                penalties.splice(index, 1);
            }
            break;
    }

    document.getElementById("newItem").value = "";
    alert(`${newItem} removed from ${librarySelect} library.`);
}

function viewLibrary(library) {
    let content = '';
    switch(library) {
        case 'parts':
            content = parts.join(', ');
            break;
        case 'tools':
            content = tools.join(', ');
            break;
        case 'poses':
            content = poses.join(', ');
            break;
        case 'penalties':
            content = penalties.join(', ');
            break;
    }
    document.getElementById("libraryContent").innerText = `${library.charAt(0).toUpperCase() + library.slice(1)}: ${content}`;
}

