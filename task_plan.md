# 作品集重构计划

## 目标

将单页 HTML 作品集重构为 Precision UI 风格的多页作品集网站，纯 HTML/CSS/JS。

## 设计方向

- **风格**：Precision UI — 冷灰白底、数据仪表盘感、单一强品牌色
- **受众**：政府信息化部门负责人、体制内技术选型决策者
- **结构**：首页 + 4 个模块详情页
- **签名元素**：提取"三握手进程图"的箭头作为视觉母题

## 阶段

| # | 阶段 | 状态 |
|---|------|------|
| 1 | 规划文件建立 | ✅ |
| 2 | 截图优化 (PNG→WebP) | ✅ |
| 3 | 设计系统落地 | ✅ |
| 4 | 首页开发 | ✅ |
| 5 | 4 个模块详情页开发 | ✅ |
| 6 | grill-me 审查 + 打磨 | ✅ |

## 最终交付物

```
作品集/
├── index.html          # 首页
├── data.html           # 数据分析模块详情
├── supervision.html    # 智能督办模块详情（含 SIGNATURE 元素）
├── documents.html      # 公文生成模块详情
├── archive.html        # 凭证归档模块详情
├── styles.css          # 共享设计系统
├── lightbox.js         # 共享交互脚本
├── images/
│   ├── thumb/          # 16 张缩略图 (800px WebP)
│   └── full/           # 16 张高清图 (1920px WebP)
├── task_plan.md        # 本文件
├── findings.md         # 研究发现
└── progress.md         # 进度日志
```

## 关键决策

- 纯 HTML/CSS/JS，零依赖，浏览器直接打开
- 截图统一 WebP，压缩率 85-95%
- 多页通过独立 HTML 文件实现，共享 styles.css + lightbox.js
- 冷灰白 + 数据蓝配色，琥珀色仅用于告警（对应软件 UI 逻辑）
- 不使用框架，保持部署零成本
