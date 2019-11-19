import { JSONSchema6 } from 'json-schema'
import { mappers } from '../mappers'

export const inbound : any = {
  "Name" : {
    "kumu": mappers.label(),
    "me2b": mappers.me2b_set_title_and_field('Name')
  },
  "Bio" : {
    "kumu": mappers.skip(),
    "me2b": mappers.me2b_set_description('Bio')
  },
  "Website" : {
    "kumu": mappers.string('Website'),
    "me2b": mappers.csv_value('Website')
  },
  "Organization" : {
    "kumu": mappers.string('Parent Org'),
    "me2b": mappers.csv_value('Organization')
  },
  "Working Group" : {
    "kumu": mappers.default(''),
    "me2b": mappers.csv_value('Working Group')
  },
  "Tags": {
    "kumu": mappers.default(''),
    "me2b": mappers.csv_value('Tags')
  },
  "Location" : {
    "kumu": mappers.default(''),
    "me2b": mappers.csv_value('Location')
  },
  "Twitter Profile" : {
    "kumu": mappers.default(''),
    "me2b": mappers.csv_value('Twitter Profile')
  },
  "LinkedIn Profile" : {
    "kumu": mappers.default(''),
    "me2b": mappers.csv_value('LinkedIn Profile')
  },
  "Github Profile" : {
    "kumu": mappers.default(''),
    "me2b": mappers.csv_value('Github Profile')
  }
}


export const schema : JSONSchema6 = {

  "$id": "http://example.com/publication#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Person",
  "type": "object",
  "required": [ ],
  "additionalProperties": false,
  "properties" : {
    "Name" : {
        "type": "string",
        "description": ""
    },
    "Bio" : {
        "type": "string",
        "description": ""
    },
    "Website" : {
        "type": "string",
        "format":"url",
        "description": ""
    },
    "Organization" : {
        "type": "string",
        "description": ""
    },
    "Working Group" : {
        "type": "string",
        "description": ""
    },
    "Tags": {
		"type": "array",
		"items": {
			"type": "string"
			}
    },
    "Location" : {
        "type": "string",
        "description": "",
    },
    "Twitter Profile" : {
        "type": "string",
        "format": "url",
        "description": "",
    },
    "LinkedIn Profile" : {
        "type": "string",
        "format": "url",
        "description": "",
    },
    "Github Profile" : {
        "type": "string",
        "format": "url",
        "description": "",
    }
  },
}