import superagent from 'superagent';
import cheerio from 'cheerio';
import path from 'path';
import fs from 'fs';

interface TitleArr{
    title:string
}
interface JsonInfo{
    time:number;
    data:TitleArr[]
}
interface Content{
    [propName: number] : TitleArr[]
}


class Reptile{
    //请求（抓取）的url
    private url = 'http://learning.sohu.com/?spm=smpc.news-home.header.7.15807126479731vt4ITG';

    //存储目录的文件路径
    private filePath = path.resolve(__dirname,'../data/data.json');

    //请求url获取到的内容
    async getHtml(){
       const result =  await superagent.get(this.url);
       return result.text;
    }

    //获取的到内容，放入到对象
    getJsonInfo(html:string){
        const $ = cheerio.load(html);
        const item = $(".z-c-block-list-item");
        const titleArr:TitleArr[] = [];
        item.map((index,ele)=>{
           const childs =  $(ele).find("a");
           const title = childs.text();
           titleArr.push({
               title
           })
        })
       return {
           time:new Date().getTime(),
           data:titleArr
       }
    }
    //存入到目录（判断：当前目录有没有？）
    getNewContent(jsonInfo:JsonInfo){
       let fileContent:Content = {};
       if( fs.existsSync(this.filePath)  ){
        fileContent = JSON.parse(  fs.readFileSync(this.filePath,'utf-8')  );
       }
       fileContent[jsonInfo.time] = jsonInfo.data;
       return fileContent;
    }
    //写入内容
    writeFile(fileContent:string){
        fs.writeFileSync(this.filePath,fileContent);
    }
    //运行所有的项目方法
    async init(){
        const html = await this.getHtml();
        const jsonInfo = this.getJsonInfo(html);
        const fileContent =  this.getNewContent(jsonInfo);
        this.writeFile(  JSON.stringify(fileContent)   );
    }
    constructor(){
        this.init();
    }

}

new Reptile();