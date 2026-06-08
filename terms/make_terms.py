from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# フォント登録
pdfmetrics.registerFont(TTFont("IPAGothic", "/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf"))

# スタイル定義
base = ParagraphStyle("base", fontName="IPAGothic", fontSize=9, leading=16, textColor="#1a1a1a")
title_style = ParagraphStyle("title", fontName="IPAGothic", fontSize=16, leading=24, alignment=TA_CENTER, spaceAfter=4, textColor="#0c0c0e")
subtitle_style = ParagraphStyle("subtitle", fontName="IPAGothic", fontSize=9, leading=14, alignment=TA_CENTER, textColor="#555555", spaceAfter=2)
h1 = ParagraphStyle("h1", fontName="IPAGothic", fontSize=10, leading=18, spaceBefore=18, spaceAfter=6, textColor="#0c0c0e")
body = ParagraphStyle("body", fontName="IPAGothic", fontSize=9, leading=17, alignment=TA_LEFT, textColor="#1a1a1a", spaceAfter=4)
item = ParagraphStyle("item", fontName="IPAGothic", fontSize=9, leading=17, leftIndent=12, textColor="#1a1a1a", spaceAfter=3)
footer_style = ParagraphStyle("footer", fontName="IPAGothic", fontSize=8, leading=13, alignment=TA_CENTER, textColor="#888888")

doc = SimpleDocTemplate(
    "llamune-club-terms.pdf",
    pagesize=A4,
    leftMargin=25*mm, rightMargin=25*mm,
    topMargin=20*mm, bottomMargin=20*mm,
)

story = []

# タイトル
story.append(Spacer(1, 6*mm))
story.append(Paragraph("ラムネクラブ 利用規約", title_style))
story.append(Paragraph("llamune Club Terms of Service", subtitle_style))
story.append(Spacer(1, 2*mm))
story.append(HRFlowable(width="100%", thickness=0.5, color="#cccccc"))
story.append(Spacer(1, 4*mm))

story.append(Paragraph(
    "本規約は、アンリモート合同会社（以下「弊社」）が提供する llamune 試用環境「ラムネクラブ」（以下「本サービス」）の利用に関する条件を定めるものです。本サービスへの申し込みをもって、利用者（以下「お客様」）は本規約に同意したものとみなします。",
    body
))

# 第1条
story.append(Paragraph("第1条（サービスの概要）", h1))
story.append(Paragraph(
    "本サービスは、llamune（ローカル LLM/RAG プラットフォーム）をお客様の業務データを用いて試用していただくための限定公開環境です。本サービスへのアクセスは、Cloudflare のトンネル技術を経由した閉域接続により提供されます。",
    body
))

# 第2条
story.append(Paragraph("第2条（利用資格）", h1))
story.append(Paragraph("本サービスを利用できるのは、以下の条件をすべて満たす法人または個人事業主に限ります。", body))
story.append(Paragraph("（1）　事前に弊社へ申請し、弊社が利用を承認した者", item))
story.append(Paragraph("（2）　連絡可能な企業メールアドレスを保有する者（フリーメールアドレスは不可）", item))
story.append(Paragraph("（3）　本規約のすべての条項に同意した者", item))

# 第3条
story.append(Paragraph("第3条（アクセス認証）", h1))
story.append(Paragraph(
    "本サービスへのアクセスには、以下の2段階の認証が必要です。",
    body
))
story.append(Paragraph("（1）　Cloudflare Access によるワンタイム PIN 認証（申請メールアドレス宛に送信）", item))
story.append(Paragraph("（2）　llamune アプリケーションへの ID／パスワードによるログイン", item))
story.append(Paragraph(
    "弊社は、申請時に登録されたメールアドレスのみにアクセスを許可します。アクセス権限の付与・変更・削除は弊社が一括して管理します。",
    body
))

# 第4条
story.append(Paragraph("第4条（利用目的）", h1))
story.append(Paragraph(
    "本サービスは試用目的に限り利用できます。商業目的での利用、第三者へのサービス提供、その他試用の範囲を超える利用はできません。",
    body
))

# 第5条
story.append(Paragraph("第5条（禁止事項）", h1))
story.append(Paragraph("お客様は、以下の行為を行ってはなりません。", body))
story.append(Paragraph("（1）　申請メールアドレスの所有者以外の者に本サービスを利用させること", item))
story.append(Paragraph("（2）　認証情報（メールアドレス・ID・パスワード等）を第三者と共有すること", item))
story.append(Paragraph("（3）　本サービスへの不正アクセス、または過度な負荷をかける行為", item))
story.append(Paragraph("（4）　法令または公序良俗に反する目的での利用", item))
story.append(Paragraph("（5）　その他、弊社が不適切と判断する行為", item))

# 第6条
story.append(Paragraph("第6条（データの取り扱い）", h1))
story.append(Paragraph(
    "お客様が本サービスに投入したデータは、お客様に割り当てられたプロジェクト環境内にのみ保存されます。弊社は、サポート目的の場合を除き、お客様のデータを参照しません。また、第三者への提供は行いません。",
    body
))
story.append(Paragraph(
    "なお、本サービスはバックアップ転送機能を提供しており、お客様はご自身のデータをいつでもダウンロードできます。",
    body
))

# 第7条
story.append(Paragraph("第7条（免責事項）", h1))
story.append(Paragraph(
    "弊社は、本サービスの利用により生じた結果および損害（データの損失、業務の中断、その他直接的・間接的損害を含む）について、一切の責任を負いません。本サービスは現状有姿（as-is）で提供されるものとし、弊社は動作の継続性・正確性・特定目的への適合性について保証しません。",
    body
))

# 第8条
story.append(Paragraph("第8条（サービスの変更・中断・終了）", h1))
story.append(Paragraph("本サービスは以下のいずれかの場合に終了します。", body))
story.append(Paragraph("（1）　お客様または弊社が相手方に終了を予告した場合", item))
story.append(Paragraph("（2）　お客様のご利用枠において予告なく利用がなく、事後のご説明もなかった場合", item))
story.append(Paragraph("（3）　弊社がサービス全体の提供を終了する場合", item))
story.append(Paragraph(
    "また、弊社はシステムの保守・障害対応等の理由により、予告なく本サービスを一時中断する場合があります。",
    body
))

# 第9条
story.append(Paragraph("第9条（知的財産権）", h1))
story.append(Paragraph(
    "本サービスを構成するソフトウェア、デザイン、コンテンツに関する知的財産権は弊社または正当な権利者に帰属します。本規約に基づく利用許諾は、これらの権利の譲渡を意味するものではありません。",
    body
))

# 第10条
story.append(Paragraph("第10条（規約の変更）", h1))
story.append(Paragraph(
    "弊社は必要に応じて本規約を変更できます。変更後の規約はメールまたは本サービス上での通知をもって効力を生じます。変更後も本サービスを継続して利用した場合、変更後の規約に同意したものとみなします。",
    body
))

# 第11条
story.append(Paragraph("第11条（準拠法・管轄裁判所）", h1))
story.append(Paragraph(
    "本規約は日本法に準拠します。本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
    body
))

# 制定日
story.append(Spacer(1, 6*mm))
story.append(HRFlowable(width="100%", thickness=0.5, color="#cccccc"))
story.append(Spacer(1, 3*mm))
story.append(Paragraph("制定：2026年6月", footer_style))
story.append(Paragraph("アンリモート合同会社　　llm@unremoted.com", footer_style))

doc.build(story)
print("Done")
