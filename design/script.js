// Initialize AOS
AOS.init();

// Selects elements in index.html
// const display = document.querySelector('#display')
const generateButton = document.querySelector("#generate")
const minimumInput = document.querySelector('#minimum')
const maximumInput = document.querySelector('#maximum')
const countInput = document.querySelector("#count")
/**
 * Creates a random number in the given range
 * @param {*} range Difference between lowest and highest values
 */
function random(range) {

    // Returns random number
    return Math.floor(Math.random() * range)
}

/**
 * Displays a random number of the given range
 */
function randomRange() {

    // Store value of minimumInput and maximumInput into variables and converts them into integer
    const minimumValue = parseInt(minimumInput.value)
    const maximumValue = parseInt(maximumInput.value)
	const countValue = parseInt(countInput.value)
    // Calculates and stores random number using random()
	var randomNumber = new Array(countValue);
	
	for (var i=0;i<countValue;i++)
	{ 
	     randomNumber[i] = random(maximumValue - minimumValue) + minimumValue
	}
    
	
    // Display randomNumber to user
		//display.innerHTML = randomNumber
	    // 要导出的数据
	    const jsonData = randomNumber;
	    // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
	    let str = `大随机数号码序列\n`;
	    // 增加\t为了不让表格显示科学计数法或者其他格式
	    for(let i = 0 ; i < jsonData.length ; i++ ){
	            str+=`${jsonData[i] + '\t'},`;     
	        str+='\n';
	    }
	    // encodeURIComponent解决中文乱码
	    const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
	    // 通过创建a标签实现
	    const link = document.createElement("a");
	    link.href = uri;
	    // 对下载的文件命名
	    link.download =  "大随机数生成数据表.csv";
	    link.click();
	
}
	

// Activates function once button is clicked
generateButton.addEventListener("click", randomRange)
