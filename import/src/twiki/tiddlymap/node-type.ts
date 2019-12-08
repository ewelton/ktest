import { TiddlyModel,SimpleTiddler } from '..'
import slugify from 'slugify'
import path from 'path'

export class NodeTypeTiddler extends SimpleTiddler  {
	/*
	created: 20190902112311677
	modified: 20190902112605892
	priority: 1
	scope: [field:element.type[working-group]]
	style: {"color":{"border":"rgba(146,233,110,1)","background":"rgba(252,53,129,1)"}}
	title: $:/plugins/felixhayashi/tiddlymap/graph/nodeTypes/working-group
	type: text/vnd.tiddlywiki
*/
	parts:string[]
	slugchain:string[]
	filepart:string
	dirchain?:string[]

	scope:string
	style:string
	constructor(parts:string[],base:TiddlyModel) {
		super({
			title:"$:/plugins/felixhayashi/tiddlymap/graph/nodeTypes/"+parts.join("/")
		},base)
		this.parts = parts
		this.slugchain=[]
		const len = this.parts.length
		for(let idx in parts)
			this.slugchain[idx]=slugify(parts[idx])
		if (len == 1) {
			this.filepart = this.slugchain[0]
			this.dirchain = undefined
		}
		else {
			this.filepart = this.slugchain[len-1]
			this.dirchain=this.slugchain.slice(0,len-1)
			}

		this.scope='[field:element.type['+this.filepart+']]'
		this.style='{"color":{"border":"'+this.randomRGBA()+'","background":"'+this.randomRGBA()+'"}}'
	}

	tiddlerdata():string {
		return super.tiddlerdata() +
		"scope: "+this.scope+"\n"+
		"style: "+this.style+"\n";
	}

	randomRGBA():string {
		return 'rgba('
							+Math.round(256*Math.random())+','
							+Math.round(256*Math.random())+','
							+Math.round(256*Math.random())+','
							+Math.round(256*Math.random())+')'
	}

	tiddlerdir():string {
		if(this.dirchain)
			return path.join(this.base.mapNodeTypesPath,this.dirchain.join("/"))
		else
			return this.base.mapNodeTypesPath;
	}

	tiddlerfile():string {
		return path.join(this.tiddlerdir(),this.filepart + ".tid")
	}

}
