#!/usr/bin/env python3
"""
FastAPI服务器来运行AdventureX水果忍者官网
"""

import uvicorn
import webbrowser
import os
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import threading
import time

# 创建FastAPI应用
app = FastAPI(
    title="AdventureX水果忍者官网",
    description="智能水果识别应用官网",
    version="1.0.0"
)

# 挂载静态文件 - 处理根目录下的所有文件
app.mount("/", StaticFiles(directory=".", html=True))





if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)