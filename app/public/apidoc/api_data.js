define({ "api": [
  {
    "type": "get",
    "url": "/banner",
    "title": "分页查询标题栏",
    "name": "banner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>起始页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>标题id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>标题描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>标题地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>标题创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>标题修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询标题栏成功',\n  data: {\n     banner: [{\n        _id: '5tret4656557frt466',\n        title: '国科',\n        url: '/index',\n        imgUrl: 'public/upload/2018-5-2/default.jpg'\n        createdAt: '2018-5-2 0:0:0',\n        updatedAt: '2018-5-2 0:0:0'\n     }],\n     total: 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询标题栏失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询标题栏失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/banner.js",
    "groupTitle": "Banner",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/banner"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/banner/:id",
    "title": "删除标题栏",
    "name": "banner_delete",
    "group": "Banner",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '删除标题栏成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>删除标题栏失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '删除标题栏失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/banner.js",
    "groupTitle": "Banner",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/banner/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/banner/:id/edit",
    "title": "根据id查询标题栏",
    "name": "banner_edit",
    "group": "Banner",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>标题id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>标题地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>标题描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>标题创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>标题修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询标题栏成功',\n  data: {\n   _id: '5tret4656557frt466',\n   title: '国科',\n   description: '国科详情',\n   url: '/index',\n   imgUrl: 'public/upload/2018-5-2/default.jpg',\n   createdAt: '2018-5-2 0:0:0',\n   updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询标题栏失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询标题栏失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/banner.js",
    "groupTitle": "Banner",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/banner/:id/edit"
      }
    ]
  },
  {
    "type": "get",
    "url": "/banner/list",
    "title": "查询所有标题栏",
    "name": "banner_list",
    "group": "Banner",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>标题id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>标题地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>标题描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>标题创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>标题修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询标题栏成功',\n  data: [{\n   _id: '5tret4656557frt466',\n   title: '国科',\n   description: '国科详情',\n   url: '/index',\n   imgUrl: 'public/upload/2018-5-2/default.jpg',\n   createdAt: '2018-5-2 0:0:0',\n   updatedAt: '2018-5-2 0:0:0'\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询标题栏失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询标题栏失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/banner.js",
    "groupTitle": "Banner",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/banner/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/banner",
    "title": "新增标题栏",
    "name": "banner_new",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>标题描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>标题地址 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>标题图片路径 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>标题id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>标题描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>标题地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>标题创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>标题修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '新增标题成功',\n  data: {\n   _id: '5tret4656557frt466',\n   title: '国科',\n   url: '/index',\n   description: '国科详情',\n   imgUrl: '/public/upload/2018-5-2/default.jpg',\n   createdAt: '2018-5-2 0:0:0',\n   updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>新增标题失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '新增标题失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/banner.js",
    "groupTitle": "Banner",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/banner"
      }
    ]
  },
  {
    "type": "put",
    "url": "/banner/:id",
    "title": "修改标题栏",
    "name": "banner_update",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>标题地址 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>标题路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>标题地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>标题描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>标题创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>标题修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '修改标题成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>修改标题失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '修改标题失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/banner.js",
    "groupTitle": "Banner",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/banner/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/information",
    "title": "分页查询基本信息",
    "name": "information",
    "group": "Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>起始页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>基本信息id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shareCode",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>公司传真</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>信息创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>信息修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询基本信息成功',\n  data: {\n     information: [{\n        _id: '5tret4656557frt466',\n        company: '国科股份有限公司',\n        shareCode: '834465',\n        address: '北京市海淀区西三旗昌临813号A11号楼',\n        tel: '010-82911260',\n        fax: '010-62160556',\n        email: 'Service@sinog2c.com',\n        createdAt: '2018-5-2 0:0:0',\n        updatedAt: '2018-5-2 0:0:0'\n     }],\n     total: 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询基本信息失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询基本信息失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/information.js",
    "groupTitle": "Information",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/information"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/information/:id",
    "title": "删除基本信息",
    "name": "information_delete",
    "group": "Information",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '删除基本信息成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>删除基本信息失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '删除基本信息失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/information.js",
    "groupTitle": "Information",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/information/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/information/:id/edit",
    "title": "根据id查询基本信息",
    "name": "information_edit",
    "group": "Information",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>标题id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shareCode",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>公司传真</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>信息创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>信息修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询基本信息成功',\n  data: {\n     _id: '5tret4656557frt466',\n     company: '国科股份有限公司',\n     shareCode: '834465',\n     address: '北京市海淀区西三旗昌临813号A11号楼',\n     tel: '010-82911260',\n     fax: '010-62160556',\n     email: 'Service@sinog2c.com',\n     createdAt: '2018-5-2 0:0:0',\n     updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询基本信息失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询基本信息失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/information.js",
    "groupTitle": "Information",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/information/:id/edit"
      }
    ]
  },
  {
    "type": "get",
    "url": "/information/list",
    "title": "查询所有基本信息",
    "name": "information_list",
    "group": "Information",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>标题id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shareCode",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>公司传真</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>信息创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>信息修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询基本信息成功',\n  data: [{\n     _id: '5tret4656557frt466',\n     company: '国科股份有限公司',\n     shareCode: '834465',\n     address: '北京市海淀区西三旗昌临813号A11号楼',\n     tel: '010-82911260',\n     fax: '010-62160556',\n     email: 'Service@sinog2c.com',\n     createdAt: '2018-5-2 0:0:0',\n     updatedAt: '2018-5-2 0:0:0'\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询基本信息失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询基本信息失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/information.js",
    "groupTitle": "Information",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/information/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/information",
    "title": "新增基本信息",
    "name": "information_new",
    "group": "Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名称 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shareCode",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址 requred</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>公司传真</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>标题id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shareCode",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>公司传真</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>信息创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>信息修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '新增基本信息成功',\n  data: {\n     _id: '5tret4656557frt466',\n     company: '国科股份有限公司',\n     shareCode: '834465',\n     address: '北京市海淀区西三旗昌临813号A11号楼',\n     tel: '010-82911260',\n     fax: '010-62160556',\n     email: 'Service@sinog2c.com',\n     createdAt: '2018-5-2 0:0:0',\n     updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>新增基本信息失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '新增基本信息失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/information.js",
    "groupTitle": "Information",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/information"
      }
    ]
  },
  {
    "type": "put",
    "url": "/information/:id",
    "title": "修改基本信息",
    "name": "information_update",
    "group": "Information",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名称 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shareCode",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>公司传真</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>标题id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shareCode",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>公司传真</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>信息创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>信息修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '修改基本信息成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>修改基本信息失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '修改基本信息失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/information.js",
    "groupTitle": "Information",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/information/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/introduction",
    "title": "分页查询简介",
    "name": "introduction",
    "group": "Introduction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>起始页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公司简介标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>简介id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公司简介标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>公司简介内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>公司简介图片数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>简介创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>简介修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询简介成功',\n  data: {\n     introduction: [{\n        _id: '5tret4656557frt466',\n        title: '国科政信科技(北京)股份有限公司是一家大型软件研发企业',\n        content: '主要从事与军政法系相关的管理和办公软件的开发,同时还负担国家国防科工局以及其他部分软件开发重任。',\n        images: [{\n          \"fieldname\": \"file\",\n          \"originalname\": \"default.jpg\",\n          \"encoding\": \"7bit\",\n          \"mimetype\": \"image/jpeg\",\n          \"destination\": \"public/upload/2018-4-3\",\n          \"filename\": \"file-1525241755117.jpg\",\n          \"path\": \"public\\\\upload\\\\2018-4-3\\\\default-1525241755117.jpg\",\n          \"size\": 20267\n         }]\n        createdAt: '2018-5-2 0:0:0',\n        updatedAt: '2018-5-2 0:0:0'\n     }],\n     total: 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询简介失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询简介失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/introduction.js",
    "groupTitle": "Introduction",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/introduction"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/introduction/:id",
    "title": "删除简介",
    "name": "introduction_delete",
    "group": "Introduction",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '删除简介成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>删除简介失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '删除简介失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/introduction.js",
    "groupTitle": "Introduction",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/introduction/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/introduction/:id/edit",
    "title": "根据id查询简介",
    "name": "introduction_edit",
    "group": "Introduction",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>简介id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公司简介标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>公司简介内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>公司简介图片数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>简介创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>简介修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询简介成功',\n  data: {\n    _id: '5tret4656557frt466',\n    title: '国科政信科技(北京)股份有限公司是一家大型软件研发企业',\n    content: '主要从事与军政法系相关的管理和办公软件的开发,同时还负担国家国防科工局以及其他部分软件开发重任。',\n    images: [{\n      \"fieldname\": \"file\",\n      \"originalname\": \"default.jpg\",\n      \"encoding\": \"7bit\",\n      \"mimetype\": \"image/jpeg\",\n      \"destination\": \"public/upload/2018-4-3\",\n      \"filename\": \"file-1525241755117.jpg\",\n      \"path\": \"public\\\\upload\\\\2018-4-3\\\\default-1525241755117.jpg\",\n      \"size\": 20267\n     }]\n    createdAt: '2018-5-2 0:0:0',\n    updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询简介失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询简介失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/introduction.js",
    "groupTitle": "Introduction",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/introduction/:id/edit"
      }
    ]
  },
  {
    "type": "get",
    "url": "/introduction/list",
    "title": "查询所有简介",
    "name": "introduction_list",
    "group": "Introduction",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>简介id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公司简介标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>公司简介内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>公司简介图片数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>简介创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>简介修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询简介成功',\n  data: [{\n    _id: '5tret4656557frt466',\n    title: '国科政信科技(北京)股份有限公司是一家大型软件研发企业',\n    content: '主要从事与军政法系相关的管理和办公软件的开发,同时还负担国家国防科工局以及其他部分软件开发重任。',\n    images: [{\n      \"fieldname\": \"file\",\n      \"originalname\": \"default.jpg\",\n      \"encoding\": \"7bit\",\n      \"mimetype\": \"image/jpeg\",\n      \"destination\": \"public/upload/2018-4-3\",\n      \"filename\": \"file-1525241755117.jpg\",\n      \"path\": \"public\\\\upload\\\\2018-4-3\\\\default-1525241755117.jpg\",\n      \"size\": 20267\n     }]\n    createdAt: '2018-5-2 0:0:0',\n    updatedAt: '2018-5-2 0:0:0'\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询简介失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询简介失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/introduction.js",
    "groupTitle": "Introduction",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/introduction/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/introduction",
    "title": "新增简介",
    "name": "introduction_new",
    "group": "Introduction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公司简介标题 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>公司简介内容 required</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>公司简介图片数组 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>简介id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公司简介标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>公司简介内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>公司简介图片数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>简介创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>简介修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '新增简介成功',\n  data: {\n    _id: '5tret4656557frt466',\n    title: '国科政信科技(北京)股份有限公司是一家大型软件研发企业',\n    content: '主要从事与军政法系相关的管理和办公软件的开发,同时还负担国家国防科工局以及其他部分软件开发重任。',\n    images: [{\n      \"fieldname\": \"file\",\n      \"originalname\": \"default.jpg\",\n      \"encoding\": \"7bit\",\n      \"mimetype\": \"image/jpeg\",\n      \"destination\": \"public/upload/2018-4-3\",\n      \"filename\": \"file-1525241755117.jpg\",\n      \"path\": \"public\\\\upload\\\\2018-4-3\\\\default-1525241755117.jpg\",\n      \"size\": 20267\n     }]\n    createdAt: '2018-5-2 0:0:0',\n    updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>新增简介失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '新增简介失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/introduction.js",
    "groupTitle": "Introduction",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/introduction"
      }
    ]
  },
  {
    "type": "put",
    "url": "/introduction/:id",
    "title": "修改简介",
    "name": "introduction_update",
    "group": "Introduction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公司简介标题 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>公司简介内容 required</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>公司简介图片数组 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>简介id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>公司简介标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>公司简介内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>公司简介图片数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>简介创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>简介修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '修改简介成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>修改简介失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '修改简介失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/introduction.js",
    "groupTitle": "Introduction",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/introduction/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/navigation",
    "title": "分页查询导航栏",
    "name": "navigation",
    "group": "Navigation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>起始页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>导航标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>导航id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>导航标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>导航地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>导航创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>导航修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询导航栏成功',\n  data: {\n     navigation: [{\n        _id: '5tret4656557frt466',\n        title: '首页',\n        url: '/index',\n        createdAt: '2018-5-2 0:0:0',\n        updatedAt: '2018-5-2 0:0:0'\n     }],\n     total: 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询导航栏失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询导航栏失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/navigation.js",
    "groupTitle": "Navigation",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/navigation"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/navigation/:id",
    "title": "删除导航",
    "name": "navigation_delete",
    "group": "Navigation",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '删除导航成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>删除导航失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '删除导航失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/navigation.js",
    "groupTitle": "Navigation",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/navigation/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/navigation/:id/edit",
    "title": "根据id查询导航栏",
    "name": "navigation_edit",
    "group": "Navigation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>导航id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>导航标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>导航地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>导航创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>导航修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询导航成功',\n  data: {\n   _id: '5tret4656557frt466',\n   title: '首页',\n   url: '/index',\n   createdAt: '2018-5-2 0:0:0',\n   updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询导航栏失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询导航栏失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/navigation.js",
    "groupTitle": "Navigation",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/navigation/:id/edit"
      }
    ]
  },
  {
    "type": "get",
    "url": "/navigation/list",
    "title": "查询所有导航栏",
    "name": "navigation_list",
    "group": "Navigation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>导航id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>导航标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>导航地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>导航创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>导航修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询导航栏成功',\n  data: [{\n   _id: '5tret4656557frt466',\n   title: '首页',\n   url: '/index',\n   createdAt: '2018-5-2 0:0:0',\n   updatedAt: '2018-5-2 0:0:0'\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询导航栏失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询导航栏失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/navigation.js",
    "groupTitle": "Navigation",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/navigation/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/navigation",
    "title": "新增导航",
    "name": "navigation_new",
    "group": "Navigation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>导航标题 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>导航地址 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>导航id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>导航标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>导航地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>导航创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>导航修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '新增导航成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>新增导航失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '新增导航失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/navigation.js",
    "groupTitle": "Navigation",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/navigation"
      }
    ]
  },
  {
    "type": "put",
    "url": "/navigation/:id",
    "title": "修改导航",
    "name": "navigation_update",
    "group": "Navigation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>导航标题 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>导航地址 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>导航id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>导航标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>导航地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>导航创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>导航修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '修改导航成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>修改导航失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '修改导航失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/navigation.js",
    "groupTitle": "Navigation",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/navigation/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/solution-detail",
    "title": "分页查询解决方案详情",
    "name": "solutionDetail",
    "group": "SolutionDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>起始页</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "introduction",
            "description": "<p>软件介绍</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案详情id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction",
            "description": "<p>软件介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "constitute",
            "description": "<p>组成部分和应用领域</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "technology",
            "description": "<p>技术特点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "solutionId",
            "description": "<p>对应的解决方案</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询解决方案详情成功',\n  data: {\n     solutionDetail: [{\n     \"_id\": \"5aec94a8d3f49a2fc4ec8944\",\n     \"solutionId\": \"5aeb3710c4628132ec43b4f6\",\n     \"sysFlag\": 1,\n     \"updatedAt\": \"2018-05-04T17:13:12.756Z\",\n     \"createdAt\": \"2018-05-04T17:13:12.756Z\",\n     \"technology\": [\"springboot&vue.js\"],\n     \"constitute\": \"罪犯数据信息\",\n     \"introduction\": \"罪犯数据库\"\n     }],\n     total: 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询解决方案详情失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询解决方案详情失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solutionDetail.js",
    "groupTitle": "SolutionDetail",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution-detail"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/solution-detail/:id",
    "title": "删除解决方案详情",
    "name": "solutionDetail_delete",
    "group": "SolutionDetail",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '删除解决方案详情成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>删除解决方案详情失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '删除解决方案详情失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solutionDetail.js",
    "groupTitle": "SolutionDetail",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution-detail/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/solution-detail/:id/edit",
    "title": "根据解决方案id查询解决方案详情",
    "name": "solutionDetail_edit",
    "group": "SolutionDetail",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案详情id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>软件名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction",
            "description": "<p>软件介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "constitute",
            "description": "<p>组成部分和应用领域</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "technology",
            "description": "<p>技术特点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "solutionId",
            "description": "<p>对应的解决方案</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询解决方案详情成功',\n  data: {\n     \"_id\": \"5aec94a8d3f49a2fc4ec8944\",\n     \"solutionId\": \"5aeb3710c4628132ec43b4f6\",\n     \"sysFlag\": 1,\n     \"updatedAt\": \"2018-05-04T17:13:12.756Z\",\n     \"createdAt\": \"2018-05-04T17:13:12.756Z\",\n     \"name\": \"罪犯数据库\",\n     \"technology\": [\"springboot&vue.js\"],\n     \"constitute\": \"罪犯数据信息\",\n     \"introduction\": \"罪犯数据库\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询解决方案详情失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询解决方案详情失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solutionDetail.js",
    "groupTitle": "SolutionDetail",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution-detail/:id/edit"
      }
    ]
  },
  {
    "type": "get",
    "url": "/solution-detail/:id",
    "title": "根据解决方案详情id查询解决方案详情",
    "name": "solutionDetail_show",
    "group": "SolutionDetail",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案详情id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>软件名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction",
            "description": "<p>软件介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "constitute",
            "description": "<p>组成部分和应用领域</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "technology",
            "description": "<p>技术特点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "solutionId",
            "description": "<p>对应的解决方案</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询解决方案详情成功',\n  data: {\n     \"_id\": \"5aec94a8d3f49a2fc4ec8944\",\n     \"solutionId\": \"5aeb3710c4628132ec43b4f6\",\n     \"sysFlag\": 1,\n     \"updatedAt\": \"2018-05-04T17:13:12.756Z\",\n     \"createdAt\": \"2018-05-04T17:13:12.756Z\",\n     \"name\": \"罪犯数据库\",\n     \"technology\": [\"springboot&vue.js\"],\n     \"constitute\": \"罪犯数据信息\",\n     \"introduction\": \"罪犯数据库\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询解决方案详情失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询解决方案详情失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solutionDetail.js",
    "groupTitle": "SolutionDetail",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution-detail/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/solution-detail",
    "title": "新增解决方案详情",
    "name": "solution_detail_new",
    "group": "SolutionDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>软件名称 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "introduction",
            "description": "<p>软件介绍 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "constitute",
            "description": "<p>组成部分和应用领域</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "technology",
            "description": "<p>技术特点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "solutionId",
            "description": "<p>解决方案id required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案详情id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction",
            "description": "<p>软件介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "constitute",
            "description": "<p>组成部分和应用领域</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "technology",
            "description": "<p>技术特点</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "solutionId",
            "description": "<p>对应的解决方案id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '新增解决方案详情成功',\n  data: {\n     \"_id\": \"5aec94a8d3f49a2fc4ec8944\",\n     \"solutionId\": \"5aeb3710c4628132ec43b4f6\",\n     \"sysFlag\": 1,\n     \"updatedAt\": \"2018-05-04T17:13:12.756Z\",\n     \"createdAt\": \"2018-05-04T17:13:12.756Z\",\n     \"name\": \"罪犯数据库\",\n     \"technology\": [\"springboot&vue.js\"],\n     \"constitute\": \"罪犯数据信息\",\n     \"introduction\": \"罪犯数据库\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>新增解决方案详情失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '新增解决方案详情失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solutionDetail.js",
    "groupTitle": "SolutionDetail",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution-detail"
      }
    ]
  },
  {
    "type": "put",
    "url": "/solution-detail/:id",
    "title": "修改解决方案详情",
    "name": "solution_detail_update",
    "group": "SolutionDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>软件名称 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "introduction",
            "description": "<p>软件介绍 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "constitute",
            "description": "<p>组成部分和应用领域</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "technology",
            "description": "<p>技术特点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "solutionId",
            "description": "<p>解决方案id required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '修改解决方案详情成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>修改解决方案详情失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '修改解决方案详情失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solutionDetail.js",
    "groupTitle": "SolutionDetail",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution-detail/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/solution",
    "title": "分页查询解决方案",
    "name": "solution",
    "group": "Solution",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>起始页</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "rows",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>解决方案标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>解决方案标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>解决方案描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>解决方案地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询解决方案成功',\n  data: {\n     solution: [{\n        _id: '5tret4656557frt466',\n        title: '企业移动平台APP开发',\n        description: '专注APP开发三十年',\n        url: '/solution',\n        imgUrl: 'public/upload/2018-5-2/default.jpg',\n        createdAt: '2018-5-2 0:0:0',\n        updatedAt: '2018-5-2 0:0:0'\n     }],\n     total: 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询解决方案失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询解决方案失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solution.js",
    "groupTitle": "Solution",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/solution/:id",
    "title": "删除解决方案",
    "name": "solution_delete",
    "group": "Solution",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '删除解决方案成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>删除解决方案失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '删除解决方案失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solution.js",
    "groupTitle": "Solution",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/solution/:id/edit",
    "title": "根据id查询解决方案",
    "name": "solution_edit",
    "group": "Solution",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>解决方案标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>解决方案地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>解决方案描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询解决方案成功',\n  data:{\n    _id: '5tret4656557frt466',\n    title: '企业移动平台APP开发',\n    description: '专注APP开发三十年',\n    url: '/solution',\n    imgUrl: 'public/upload/2018-5-2/default.jpg',\n    createdAt: '2018-5-2 0:0:0',\n    updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询解决方案失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询解决方案失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solution.js",
    "groupTitle": "Solution",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution/:id/edit"
      }
    ]
  },
  {
    "type": "get",
    "url": "/solution/list",
    "title": "查询所有解决方案",
    "name": "solution_list",
    "group": "Solution",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>解决方案标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>解决方案地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>解决方案描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '查询解决方案成功',\n  data: [\n   [{\n     _id: '5tret4656557frt466',\n     title: '企业移动平台APP开发',\n     description: '专注APP开发三十年',\n     url: '/solution',\n     imgUrl: 'public/upload/2018-5-2/default.jpg',\n     createdAt: '2018-5-2 0:0:0',\n     updatedAt: '2018-5-2 0:0:0'\n   }, {\n     _id: '5tret4656557frt467',\n     title: '企业移动平台APP开发',\n     description: '专注APP开发三十年',\n     url: '/solution',\n     imgUrl: 'public/upload/2018-5-2/default.jpg',\n     createdAt: '2018-5-2 0:0:0',\n     updatedAt: '2018-5-2 0:0:0'\n   }, {\n     _id: '5tret4656557frt468',\n     title: '企业移动平台APP开发',\n     description: '专注APP开发三十年',\n     url: '/solution',\n     imgUrl: 'public/upload/2018-5-2/default.jpg',\n     createdAt: '2018-5-2 0:0:0',\n     updatedAt: '2018-5-2 0:0:0'\n   }]\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>查询解决方案失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '查询解决方案失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solution.js",
    "groupTitle": "Solution",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/solution",
    "title": "新增解决方案",
    "name": "solution_new",
    "group": "Solution",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>解决方案标题 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>解决方案描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>解决方案地址 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>解决方案标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>解决方案描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>解决方案地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '新增解决方案成功',\n  data: {\n   _id: '5tret4656557frt466',\n   title: '企业移动平台APP开发',\n   description: '专注APP开发三十年',\n   url: '/solution',\n   imgUrl: 'public/upload/2018-5-2/default.jpg',\n   createdAt: '2018-5-2 0:0:0',\n   updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>新增解决方案失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '新增解决方案失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solution.js",
    "groupTitle": "Solution",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution"
      }
    ]
  },
  {
    "type": "put",
    "url": "/solution/:id",
    "title": "修改解决方案",
    "name": "solution_update",
    "group": "Solution",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>解决方案标题 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>解决方案地址 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>解决方案描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>解决方案id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>解决方案标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>解决方案地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>解决方案描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>解决方案创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>解决方案修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '修改解决方案成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>修改解决方案失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '修改解决方案失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/solution.js",
    "groupTitle": "Solution",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/solution/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/upload",
    "title": "上传文件",
    "name": "upload",
    "group": "Upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>文件对象 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fieldname",
            "description": "<p>参数名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "originalname",
            "description": "<p>原始文件名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "encoding",
            "description": "<p>文件编码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mimetype",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>文件存储路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>完整文件路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '上传文件成功',\n  data: {\n      \"fieldname\": \"file\",\n      \"originalname\": \"default.jpg\",\n      \"encoding\": \"7bit\",\n      \"mimetype\": \"image/jpeg\",\n      \"destination\": \"public/upload/2018-4-3\",\n      \"filename\": \"file-1525241755117.jpg\",\n      \"path\": \"http://10.10.10.31:7001/public\\\\upload\\\\2018-4-3\\\\default-1525241755117.jpg\",\n      \"size\": 20267\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>上传文件失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '上传文件失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/upload.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "用户登录",
    "name": "login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>用户创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>用户修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '用户登录成功',\n  data: {\n   _id: '5tret4656557frt466',\n   userName: 'admin',\n   createdAt: '2018-5-2 0:0:0',\n   updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>用户名或者密码不正确</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '用户名或者密码不正确'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "退出登录",
    "name": "logout",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '退出登录成功',\n  data: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>退出登录失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '退出登录失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/logout"
      }
    ]
  },
  {
    "type": "post",
    "url": "/register",
    "title": "用户注册",
    "name": "register",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>用户创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>用户修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '注册用户成功',\n   _id: '5tret4656557frt466',\n   userName: 'admin',\n   createdAt: '2018-5-2 0:0:0',\n   updatedAt: '2018-5-2 0:0:0'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>注册用户失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '注册用户失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/register"
      }
    ]
  },
  {
    "type": "post",
    "url": "/resetPwd",
    "title": "修改用户密码",
    "name": "restPwd",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>用户名 required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>用户密码 required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>用户创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>用户修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 200,\n  msg: '修改用户密码成功',\n  data: {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>修改用户密码失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  code: 500,\n  msg: '修改用户密码失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://10.10.10.31:7001/resetPwd"
      }
    ]
  }
] });
