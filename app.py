#!/usr/bin/env python
#-*- coding: utf-8 -*-
import bottle
import model

@bottle.route('/')
def index():
    return pug('index.pug')

@bottle.route('/<filename:re:.*.html>')
def pug(filename):
    return model.pug(filename)

# testing
bottle.debug(True)
bottle.run(host='0.0.0.0', port=8080, reloader=True)
