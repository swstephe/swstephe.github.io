#!/usr/bin/env python
#-*- coding: utf-8 -*-
import os
import subprocess as sub
import sys
import bottle

CWD = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(CWD, 'src')

def run(*cmd, **kwargs):
    p = sub.Popen(cmd, stdout=sub.PIPE, **kwargs)
    out, err = p.communicate()
    return out

def output(out, dst=None):
    if dst is None: return out
    if hasattr(dst, 'write'):
        dst.write(out)
    else:
        with open(dst, 'wt') as f:
            f.write(out)

def pug(filename, dst=None):
    with open(filename.replace('.html', '.pug'), 'rb') as f:
        out = run('pug', '--pretty', stdin=f)
    return output(out, dst)
