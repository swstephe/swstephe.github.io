#!/usr/bin/env python
#-*- coding: utf-8 -*-
import os
from invoke import task
import model

@task
def pug(ctx, src, dst):
    """compile pug"""
    return model.pug(src, dst)

CMD_MAP = {
    '.pug':     (pug,       '.html'),
}

def _walk():
    for root, dirs, files in os.walk('src'):
        files = [f for f in files if f[0] not in '._']
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for f in files:
            src = os.path.join(root, f)
            fname, ext = os.path.splitext(src)
            if not CMD_MAP.has_key(ext): continue
            cmd, ext2 = CMD_MAP[ext]
            dst = os.path.basename(fname)+ext2
            yield cmd, src, dst

@task
def build(ctx, force=False):
    """build static site"""
    for cmd, src, dst in _walk():
        print src, '->', dst
        if (
            not os.path.exists(dst)
            or os.stat(src).st_mtime >= os.stat(dst).st_mtime
            or force
        ):
            cmd(ctx, src, dst)
