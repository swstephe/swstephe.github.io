#!/usr/bin/env python
#-*- coding: utf-8 -*-
import os
from fabric.api import *

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')

outdir = lambda f: os.path.dirname(f[4:]) or '.'

def coffee(fname):
    """compile coffeescript"""
    local(' '.join(('coffee', '--compile', '--output', outdir(fname), fname)))

def jade(fname):
    """compile jade"""
    local(' '.join(('jade', '--pretty', '--out', outdir(fname), fname)))

def svg(fname):
    """copy svg"""
    local(' '.join(('cp', fname, outdir(fname))))

def stylus(fname):
    """compile stylus"""
    local(' '.join(('stylus', '--out', outdir(fname), fname)))

CMD_MAP = {
    '.coffee': (coffee, '.js'),
    '.jade': (jade, '.html'),
    '.styl': (stylus, '.css'),
    '.svg': (svg, '.svg'),
}

def _walk():
    for root, dirs, files in os.walk('src'):
        files = [f for f in files if not f.startswith('.')]
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for f in files:
            src = os.path.join(root, f)
            fname, ext = os.path.splitext(src)
            if not CMD_MAP.has_key(ext): continue
            cmd, ext2 = CMD_MAP[ext]
            dst = fname[4:]+ext2
            yield cmd, src, dst

def build(force=False):
    """build static site"""
    for cmd, src, dst in _walk():
        print src, '->', dst
        if (
            not os.path.exists(dst)
            or os.stat(src).st_mtime >= os.stat(dst).st_mtime
            or force
        ):
            cmd(src)

def clean():
    """clean static site"""
    for cmd, src, dst in _walk():
        if os.path.exists(dst):
            os.unlink(dst)
