import { JSONSchema6 } from 'json-schema'

export const schema : JSONSchema6 = {
  "$id": "https://example.com/organization.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Organization",
  "type": "object",
  "properties": {
    "Org Name": {
    	type: "string",
      title: "Organization Name"
    },
    "About": {
    	"type": "string"
    },
    "Website": {
    	"type": "string",
    	"format": "url"
    },
    "Org Type": {
    	"type": "string",
    	"enum": [
    		"Coalition or Network",
    		"Consumer support",
    		"Government Department",
    		"Research Lab or Center",
    		"School",
    		"Standards Development Organization",
    		"Startup",
    		"Supra National Government",
    		"Trade Association"
    	]
    },
    "Parent Org": {
    	"type": "string"
    },
    "Key People": {
    	"type": "string",
    	"enum": [
    		"Board People",
    		"CEO or ED",
    		"Other Leadership",
    		"Working group chair",
    		"Technical editor"
    	]
    },
    "Audience": {
    	"type": "string",
    	"enum": [
    		"C suite decision makers",
    		"consumer technology vendors",
    		"enterprise technology vendors",
    		"general public",
    		"government workers",
    		"legislators",
    		"marginalized and disadvantage communities",
    		"product users",
    		"researchers"
    	]
    },
    "Partners": {
    	"type": "string"
    },
    "Me2B WG": {
    	"type": "string"
    },
    "Tags": {
    	"type": "string"
    },
    "Github Repo": {
    	"type": "string",
    	"format": "url"
    },
    "Date Founded": {
    	"type": "string",
    	"format": "date"
    },
    "Date Ended": {
    	"type": "string",
    	"format": "date"
    },
    "Purpose": {
    	"type": "string",
    	"enum": [
    		"education",
    		"human rights",
    		"usability",
    		"tech interoperability",
    		"governance",
    		"certification and compliance",
    		"transparency and accountability"
    	]
    },
    "Sector": {
    	"type": "string",
    	"enum": [
    		"non-profit",
    		"for-profit",
    		"government",
    		"academic"
    	]
    },
    "Tech Focus": {
    	"type": "string",
    	"enum": [
    		"Identity",
    		"Data Mobility",
    		"Terms Management",
    		"Information Sharing Control",
    		"Data Storage"
    	]
    },
    "Activities": {
    	"type": "string",
    	"enum": [
    		"advocacy",
    		"certification",
    		"compliance auditing",
    		"events and convening",
    		"formal training and classes",
    		"funding",
    		"incubation",
    		"movement building",
    		"outreach",
    		"policy development",
    		"publication",
    		"regulation",
    		"research",
    		"software development",
    		"standard development"
    	]
    },
    "Status": {
    	"type": "string",
    	"enum": [
    		"active",
    		"inactive",
    		"merged"
    	]
    },
    "Me2Be Relationship": {
    	"type": "string",
    	"enum": [
    		"potential collaborator",
    		"collaborating org",
    		"certification dandidate or awardee",
    		"member",
    		"out of scope"
    	]
    },
    "Scope": {
    	"type": "string",
    	"enum": [
    		"global",
    		"national",
    		"regional",
    		"local",
    		"other"
    	]
    },
    "Location(s)": {
    	"type": "string"
    },
    "Products and or services": {
    	"type": "string"
    },
    "Twitter Profile": {
    	"type": "string",
    	"format": "url"
    },
    "LinkedIn Profile": {
    	"type": "string",
    	"format": "url"
    },
    "Github Profile": {
    	"type": "string",
    	"format": "url"
    },
    "Frequency": {
    	"type": "string"
    },
    "Relevant Publications": {
    	"type": "string"
    }

  }
}
