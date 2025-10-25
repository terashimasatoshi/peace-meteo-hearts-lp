import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";
import { CheckCircle2, Sparkles, Search, Beaker, Heart, Shield, MapPin, Phone, Clock, TrendingUp, Wind, Zap } from "lucide-react";
import heroImage from "figma:asset/15dc1346a5b2ea43e12924c729b25e2fe2000175.png";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📸 Before/After画像の設定（Googleドライブ）
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 
// 【Googleドライブの画像リンクの使い方】
// 
// 1. Googleドライブで画像を右クリック→「共有」→「リンクを取得」
// 2. 共有リンクは以下のような形式です：
//    https://drive.google.com/file/d/FILE_ID/view?usp=sharing
// 
// 3. FILE_ID部分（/d/ と /view の間）をコピーして、
//    以下の変数の id= の後に貼り付けてください
// 
// 例：共有リンクが https://drive.google.com/file/d/1ZjAVFb2X1IPOBx7Ui-IVVxRlbGeS4Xm-/view?usp=sharing
//    ↓
//    FILE_IDは「1ZjAVFb2X1IPOBx7Ui-IVVxRlbGeS4Xm-」
//    ↓
//    const beforeImage = "https://drive.google.com/uc?export=view&id=1ZjAVFb2X1IPOBx7Ui-IVVxRlbGeS4Xm-";
// 
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Before画像（施術前）のGoogleドライブURL
const beforeImage = "https://drive.google.com/file/d/1ZjAVFb2X1IPOBx7Ui-IVVxRlbGeS4Xm-/view";

// After画像（施術後）のGoogleドライブURL
const afterImage = "https://drive.google.com/file/d/19KF2iedIuPEDQkAE24omUcA4jCVsxneA/view?usp=drive_link";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Noto Sans JP', sans-serif", backgroundColor: '#F5F2EA' }}>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid rgba(157, 208, 179, 0.2)'
        }}
      >
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, rgba(157, 208, 179, 0.75) 0%, rgba(240, 244, 242, 0.85) 50%, rgba(245, 242, 234, 0.9) 100%)'
        }}></div>
        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="mb-4 leading-[1.4] px-4 text-center" style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 5vw, 3.75rem)',
              color: '#2C5F4F',
              letterSpacing: '-0.02em',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              METEOストレート
              <br />
              ×
              <br />
              ハーツ
              <br />
              で叶える あなただけの
              <br />
              髪質改善
            </h1>
            
            <p className="mb-2 leading-[1.5] px-4" style={{ 
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
              color: '#4A4A4A',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              くせ毛・ダメージ・広がりを
              根本から変える福井の髪質改善サロン
            </p>
            
            <p className="max-w-[800px] mx-auto leading-[1.8] px-4" style={{
              fontSize: 'clamp(0.9375rem, 2vw, 1.25rem)',
              color: '#4A4A4A',
              marginTop: '1.5rem'
            }}>
              酸熱トリートメント × 縮毛矯正 × カウンセリング
              3つの技術が融合した、Peaceオリジナルのダブル髪質改善
            </p>
            
            {/* Benefits List */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-[900px] mx-auto mt-6 sm:mt-8 px-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                <span style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#4A4A4A' }}>ブリーチ毛・エイジング毛にも対応</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                <span style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#4A4A4A' }}>丁寧なカウンセリングで髪質を分析</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                <span style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#4A4A4A' }}>pH調整でダメージを最小限に</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <a href="https://beauty.hotpepper.jp/slnH000281422/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="px-10 py-7 shadow-lg"
                  style={{
                    backgroundColor: '#D4A574',
                    color: '#FFFFFF',
                    fontSize: '1.125rem',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c19563';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#D4A574';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  高柳本店を予約する
                </Button>
              </a>
              <a href="https://beauty.hotpepper.jp/slnH000381011/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="px-10 py-7 shadow-lg"
                  style={{
                    backgroundColor: '#D4A574',
                    color: '#FFFFFF',
                    fontSize: '1.125rem',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c19563';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#D4A574';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  花堂店を予約する
                </Button>
              </a>
            </div>
            
            <p className="mt-6 sm:mt-8 px-4" style={{
              fontSize: 'clamp(0.8125rem, 1.8vw, 0.875rem)',
              color: '#4A4A4A',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '1.5rem auto 0'
            }}>
              初回限定！カウンセリング無料
              <br />
              所要時間: 約2.5～3時間
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <h2 className="text-center mb-4 leading-[1.3] px-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
            color: '#2C5F4F',
            maxWidth: '800px',
            margin: '0 auto 1rem'
          }}>
            こんな髪の悩み、抱えていませんか?
          </h2>
          <div className="flex justify-center mb-12">
            <div style={{ width: '120px', height: '2px', backgroundColor: '#9DD0B3' }}></div>
          </div>
          
          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-xl" style={{ backgroundColor: '#F0F4F2' }}>
              <Wind className="w-12 h-12 mx-auto mb-6" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                くせ毛・うねり
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                湿気の日は髪が広がって<br />まとまらない...<br /><br />
                毎朝アイロンで伸ばすのが<br />大変で時間がかかる
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl" style={{ backgroundColor: '#F0F4F2' }}>
              <Zap className="w-12 h-12 mx-auto mb-6" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                ダメージ・パサつき
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                カラーやブリーチを繰り返して<br />髪がパサパサに...<br /><br />
                縮毛矯正で硬くなった<br />髪を何とかしたい
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl" style={{ backgroundColor: '#F0F4F2' }}>
              <TrendingUp className="w-12 h-12 mx-auto mb-6" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                エイジング毛
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                年齢とともに髪が<br />細く弱くなってきた...<br /><br />
                昔の施術では<br />ダメージが怖い
              </p>
            </div>
          </div>
          
          {/* Lead Text */}
          <div className="max-w-[800px] mx-auto space-y-6 px-6" style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', lineHeight: '2', color: '#4A4A4A' }}>
            <p className="text-center sm:text-left">
              従来の縮毛矯正や酸熱トリートメントでは、こうした悩みを解決できないことが多くありました。
            </p>
            
            <p className="text-center sm:text-left" style={{ fontStyle: 'italic', color: '#2C5F4F' }}>
              「強いクセは伸びるけど、髪が硬くゴワゴワになってしまう」
              <br />
              「酸熱トリートメントで手触りは良くなったけど、持続性がない」
              <br />
              「ブリーチ毛だから、縮毛矯正を断られた」
            </p>
            
            <p className="text-center sm:text-left">
              そんな経験はありませんか？
            </p>
            
            <p className="text-center sm:text-left">
              HAIR&MAKE peaceでは、こうした従来の課題を解決するために
              <strong style={{ color: '#2C5F4F' }}>「METEOストレート」と「ハーツシリーズ」を組み合わせた
              独自の髪質改善メニュー</strong>を開発しました。
            </p>
            
            <p className="text-center sm:text-left">
              カウンセリングで一人ひとりの髪質を分析し、
              薬剤のpHや配合比率を調整することで、
              ダメージを最小限に抑えながら
              <strong style={{ color: '#2C5F4F' }}>柔らかく自然なストレートヘア</strong>を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <h2 className="text-center mb-4 leading-[1.3] px-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
            color: '#2C5F4F',
            maxWidth: '900px',
            margin: '0 auto 1rem'
          }}>
            なぜ「METEOストレート × ハーツ」なのか?
          </h2>
          <p className="text-center mb-4 px-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: '#4A4A4A', maxWidth: '700px', margin: '0 auto 1rem' }}>
            2つの技術を融合した、Peaceオリジナルの髪質改善
          </p>
          <div className="flex justify-center mb-12">
            <div style={{ width: '120px', height: '2px', backgroundColor: '#9DD0B3' }}></div>
          </div>
          
          <div className="max-w-[800px] mx-auto mb-12 sm:mb-16 space-y-4 px-6" style={{ fontSize: 'clamp(0.9375rem, 2vw, 1rem)', lineHeight: '2', color: '#4A4A4A' }}>
            <p className="text-center sm:text-left">
              従来は「ダメージを抑えること」と「強いクセを伸ばすこと」を
              両立することが困難でした。
            </p>
            <p className="text-center sm:text-left">
              Peaceでは、酸熱トリートメントの補修力を持つ「METEOストレート」と、
              優しく確実な縮毛効果を持つ「ハーツシリーズ」を組み合わせることで、
              これまで難しかった髪質にも対応できるようになりました。
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 rounded-xl" style={{ backgroundColor: '#F0F4F2' }}>
              <Sparkles className="w-12 h-12 mb-6" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-6" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.75rem',
                color: '#2C5F4F'
              }}>
                METEOストレート
              </h3>
              <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                酸熱トリートメント × 縮毛矯正の融合技術
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                  <span style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                    髪の内部を補修しながらクセを伸ばす
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                  <span style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                    従来の酸熱トリートメントの欠点（硬さ、臭い、色落ち）を解消
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                  <span style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                    空気を含んだような自然な仕上がり
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                  <span style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                    エイジング毛・ブリーチ毛にも対応可能
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="p-10 rounded-xl" style={{ backgroundColor: '#F5F2EA' }}>
              <Heart className="w-12 h-12 mb-6" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-6" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.75rem',
                color: '#2C5F4F'
              }}>
                ハーツシリーズ
              </h3>
              <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                アルギニンベースの優しいアルカリ剤
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                  <span style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                    髪への負担が少なく、柔らかな仕上がり
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                  <span style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                    ハーツH・S・Bを髪質に合わせて調整
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                  <span style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                    ブリーチ毛にも安心して施術可能
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                  <span style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                    緩やかな反応で失敗リスクを軽減
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Highlight Box */}
          <div className="max-w-[800px] mx-auto p-10 rounded-2xl text-center" style={{ 
            backgroundColor: 'rgba(157, 208, 179, 0.2)',
            border: '2px solid #9DD0B3'
          }}>
            <Sparkles className="w-12 h-12 mx-auto mb-6" style={{ color: '#2C5F4F' }} />
            <p className="mb-2" style={{ fontSize: '1.125rem', color: '#2C5F4F' }}>💡 Point!</p>
            <p className="mb-4" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#2C5F4F' }}>
              METEOストレートのダメージレスな補修力<br />
              ×<br />
              ハーツの優しく確実な縮毛効果<br />
              =
            </p>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#2C5F4F' }}>
              <strong>強いうねりからエイジング毛まで、<br />
              幅広い髪質に対応できる理想的な髪質改善</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Counseling Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <h2 className="text-center mb-4 leading-[1.3] px-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
            color: '#2C5F4F',
            maxWidth: '800px',
            margin: '0 auto 1rem'
          }}>
            カウンセリングで見つける
            あなただけの髪質改善
          </h2>
          <div className="flex justify-center mb-12">
            <div style={{ width: '120px', height: '2px', backgroundColor: '#9DD0B3' }}></div>
          </div>
          
          <div className="max-w-[800px] mx-auto mb-12 sm:mb-16 space-y-4 px-6" style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', lineHeight: '2', color: '#4A4A4A' }}>
            <p className="text-center sm:text-left">
              Peaceでは、施術前の丁寧なカウンセリングを最も大切にしています。
            </p>
            <p className="text-center sm:text-left">
              なぜなら、同じ「くせ毛」でも、その原因や髪の状態は
              一人ひとり全く異なるからです。
            </p>
            <p className="text-center sm:text-left">
              お客様の髪質・ダメージ履歴・ライフスタイルをしっかり分析し、
              METEOストレートとハーツの配合比率やpHを細かく調整。
              これにより、最適な効果を引き出すことができます。
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#9DD0B3' }}>
                <span style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.5rem',
                  color: '#FFFFFF'
                }}>
                  1
                </span>
              </div>
              <Search className="w-10 h-10 mx-auto mb-4" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                髪質を徹底分析
              </h3>
              <ul className="text-left space-y-2" style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                <li>・うねりの強さ・パターン</li>
                <li>・ダメージ履歴（カラー/ブリーチ）</li>
                <li>・エイジングによる変化</li>
                <li>・頭皮の状態</li>
              </ul>
            </div>
            
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#9DD0B3' }}>
                <span style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.5rem',
                  color: '#FFFFFF'
                }}>
                  2
                </span>
              </div>
              <Beaker className="w-10 h-10 mx-auto mb-4" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                薬剤を最適設計
              </h3>
              <ul className="text-left space-y-2" style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                <li>・METEOのpH調整</li>
                <li>・ハーツH・S・Bの配合調整</li>
                <li>・インクライン濃度の設定</li>
                <li>・施術時間の最適化</li>
              </ul>
            </div>
            
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#9DD0B3' }}>
                <span style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.5rem',
                  color: '#FFFFFF'
                }}>
                  3
                </span>
              </div>
              <Heart className="w-10 h-10 mx-auto mb-4" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                施術＆アフターケア
              </h3>
              <ul className="text-left space-y-2" style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                <li>・髪の状態を確認しながら施術</li>
                <li>・ホームケアアドバイス</li>
                <li>・次回メンテナンス提案</li>
                <li>・LINEでアフターフォロー</li>
              </ul>
            </div>
          </div>
          
          {/* Pull Quote */}
          <div className="max-w-[700px] mx-auto p-10 rounded-lg" style={{ 
            backgroundColor: '#F0F4F2',
            borderLeft: '4px solid #9DD0B3'
          }}>
            <p className="mb-4" style={{ 
              fontSize: '1rem',
              lineHeight: '1.9',
              color: '#4A4A4A',
              fontStyle: 'italic'
            }}>
              「METEOストレート×ハーツは、髪の芯から補修しながら自然なストレートに導きます。ダメージ毛やブリーチ毛でも、安心して施術できるのが強みです」
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#5a7a6a' }}>
              — HAIR&MAKE peace スタイリスト
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <h2 className="text-center mb-4 leading-[1.3] px-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
            color: '#2C5F4F'
          }}>
            Before & After
          </h2>
          <p className="text-center mb-4 px-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: '#4A4A4A' }}>
            実際の変化をご覧ください
          </p>
          <div className="flex justify-center mb-12">
            <div style={{ width: '120px', height: '2px', backgroundColor: '#9DD0B3' }}></div>
          </div>
          
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-[900px] mx-auto">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <div className="absolute top-4 left-4 px-4 py-2 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: '#FFFFFF', fontSize: '0.875rem' }}>
                  Before
                </div>
                <ImageWithFallback 
                  src={beforeImage}
                  alt="施術前の髪"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                広がり・うねり・ダメージが目立つ髪
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <div className="absolute top-4 left-4 px-4 py-2 rounded" style={{ backgroundColor: '#9DD0B3', color: '#FFFFFF', fontSize: '0.875rem' }}>
                  After
                </div>
                <ImageWithFallback 
                  src={afterImage}
                  alt="施術後の髪"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#4A4A4A' }}>
                柔らかさ・ツヤ・まとまりを実現
              </p>
            </div>
          </div>
          
          {/* Effects */}
          <div className="max-w-[600px] mx-auto mb-12">
            <p className="text-center mb-6" style={{ fontSize: '1.125rem', color: '#2C5F4F' }}>
              ✨ 施術後の変化
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                <span style={{ fontSize: '1rem', color: '#4A4A4A' }}>手触りが驚くほど柔らかくなった</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                <span style={{ fontSize: '1rem', color: '#4A4A4A' }}>湿気の日でも広がらない</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                <span style={{ fontSize: '1rem', color: '#4A4A4A' }}>朝のスタイリング時間が半分に</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#9DD0B3' }} />
                <span style={{ fontSize: '1rem', color: '#4A4A4A' }}>ブローなしでもサラサラな質感</span>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="max-w-[700px] mx-auto p-10 rounded-xl" style={{ backgroundColor: '#F5F2EA' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: '#9DD0B3' }}></div>
              <div>
                <p className="mb-2" style={{ fontSize: '0.875rem', color: '#4A4A4A' }}>
                  30代女性 / ブリーチ毛
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                  「カウンセリングで丁寧に髪質を診断してもらい、自分に合った薬剤を調整してもらえたのが良かったです。ブリーチを何度もしていたので縮毛矯正は諦めていましたが、METEOストレート×ハーツなら大丈夫とのことで試してみました。施術後は信じられないくらいサラサラで、毎日のお手入れが本当に楽になりました!」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Peace Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <h2 className="text-center mb-8 sm:mb-12 leading-[1.3] px-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
            color: '#2C5F4F',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Peaceが選ばれる3つの理由
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div style={{ fontSize: '4.5rem', color: '#9DD0B3', fontFamily: "'Playfair Display', serif", lineHeight: '1' }}>
                ①
              </div>
              <Heart className="w-12 h-12 mx-auto my-6" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                一人ひとりに合わせた<br />オーダーメイド施術
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                マニュアル通りの施術ではなく、カウンセリングで髪質を分析。薬剤のpH・濃度・時間をあなたに最適化します。
              </p>
            </div>
            
            <div className="text-center">
              <div style={{ fontSize: '4.5rem', color: '#9DD0B3', fontFamily: "'Playfair Display', serif", lineHeight: '1' }}>
                ②
              </div>
              <Shield className="w-12 h-12 mx-auto my-6" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                ダメージを最小限に抑える<br />独自技術
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                METEOストレート×ハーツのダブル処方により、ブリーチ毛・エイジング毛でも安心して施術を受けられます。
              </p>
            </div>
            
            <div className="text-center">
              <div style={{ fontSize: '4.5rem', color: '#9DD0B3', fontFamily: "'Playfair Display', serif", lineHeight: '1' }}>
                ③
              </div>
              <MapPin className="w-12 h-12 mx-auto my-6" style={{ color: '#9DD0B3' }} />
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                福井2店舗で<br />通いやすい立地
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                高柳本店・花堂店の2拠点であなたのライフスタイルに合わせて選べます。駐車場完備で安心。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <h2 className="text-center mb-8 sm:mb-12 leading-[1.3] px-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2rem)',
            color: '#2C5F4F',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            お客様とスタイリストの声
          </h2>
          
          {/* Customer Voices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#F0F4F2' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: '#9DD0B3' }}></div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#4A4A4A', marginBottom: '0.5rem' }}>
                    40代女性 / エイジング毛
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                「METEO×ハーツと丁寧なカウンセリングで、自分の髪質に合ったメニューを提案してもらえました。これまでどこのサロンでも満足できなかったのですが、Peaceでようやく理想の髪質に出会えました。毎日のスタイリングが本当に楽になって、朝の時間が増えたのが嬉しいです」
              </p>
            </div>
            
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#F5F2EA' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: '#9DD0B3' }}></div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#4A4A4A', marginBottom: '0.5rem' }}>
                    20代女性 / ブリーチ毛
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                「他のサロンでは『ブリーチ毛は縮毛矯正できない』と断られてしまいましたが、Peaceでは『METEOストレート×ハーツなら大丈夫』と言っていただけて本当に嬉しかったです。仕上がりも柔らかくて、カラーの色も綺麗に残っていて感動しました!」
              </p>
            </div>
          </div>
          
          {/* Stylist Voice */}
          <div className="max-w-[800px] mx-auto p-10 rounded-xl" style={{ 
            backgroundColor: 'rgba(157, 208, 179, 0.2)',
            border: '2px solid #9DD0B3'
          }}>
            <p className="mb-4" style={{ fontSize: '0.9375rem', color: '#2C5F4F' }}>
              【スタイリストより】
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#4A4A4A' }}>
              「薬剤のpHや濃度を細かく調整できるため、うねり・広がり・エイジング毛まで、幅広い髪質に対応できるのがMETEOストレート×ハーツの強みです。特にブリーチ毛のお客様は、従来の縮毛矯正ではリスクが高く断らざるを得ないケースも多かったのですが、この技術なら安心して施術できます。お客様の『こんなに柔らかくなるんですね!』という驚きの声を聞くたびに、この技術を導入して本当に良かったと感じています」
            </p>
            <p className="mt-4" style={{ fontSize: '0.9375rem', color: '#5a7a6a' }}>
              — HAIR&MAKE peace スタイリスト
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-[800px] mx-auto px-6 sm:px-10">
          <h2 className="text-center mb-8 sm:mb-12 leading-[1.3] px-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2rem)',
            color: '#2C5F4F'
          }}>
            よくあるご質問
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="rounded-lg px-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e0e0e0' }}>
              <AccordionTrigger style={{ fontSize: '1.0625rem', color: '#2C5F4F' }}>
                施術時間はどのくらいかかりますか？
              </AccordionTrigger>
              <AccordionContent style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                カウンセリング込みで約2.5～3時間です。髪の状態により前後することがありますが、丁寧に施術させていただきます。
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="rounded-lg px-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e0e0e0' }}>
              <AccordionTrigger style={{ fontSize: '1.0625rem', color: '#2C5F4F' }}>
                ブリーチ毛でも施術できますか？
              </AccordionTrigger>
              <AccordionContent style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                はい、可能です。METEOストレート×ハーツはダメージ毛やブリーチ毛にも対応できる技術です。カウンセリングで髪の状態を確認し、最適な薬剤を調整いたします。
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="rounded-lg px-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e0e0e0' }}>
              <AccordionTrigger style={{ fontSize: '1.0625rem', color: '#2C5F4F' }}>
                効果はどのくらい持続しますか？
              </AccordionTrigger>
              <AccordionContent style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                個人差はありますが、半年から1年は効果が持続します。ホームケアの方法もアドバイスさせていただきますので、より長く美しい状態を保つことができます。
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="rounded-lg px-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e0e0e0' }}>
              <AccordionTrigger style={{ fontSize: '1.0625rem', color: '#2C5F4F' }}>
                当日カラーもできますか？
              </AccordionTrigger>
              <AccordionContent style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                はい、METEOカラーと組み合わせることで、カラーと髪質改善を同時に行うことが可能です。施術時間やダメージを考慮しながらご提案いたします。
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="rounded-lg px-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e0e0e0' }}>
              <AccordionTrigger style={{ fontSize: '1.0625rem', color: '#2C5F4F' }}>
                料金はいくらですか？
              </AccordionTrigger>
              <AccordionContent style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                22,000円〜となります。髪の長さやメニューの組み合わせにより料金は変動いたします。カウンセリング時に詳しくご案内いたしますので、まずはお気軽にご相談ください。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24" style={{ 
        background: 'linear-gradient(135deg, #9DD0B3 0%, #85BDAA 100%)'
      }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center">
          <h2 className="mb-6 leading-[1.3] px-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            color: '#FFFFFF',
            maxWidth: '900px',
            margin: '0 auto 1.5rem'
          }}>
            あなただけの髪質改善を
            今すぐ体験してください
          </h2>
          
          <p className="mb-4 px-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: '#FFFFFF' }}>
            初回限定！カウンセリング無料
          </p>
          <p className="mb-10 sm:mb-12 max-w-[600px] mx-auto px-4" style={{ fontSize: 'clamp(0.9375rem, 2vw, 1rem)', color: '#FFFFFF', lineHeight: '1.8' }}>
            まずはお気軽にご相談ください。
            あなたの髪質に最適なメニューをご提案いたします。
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="https://beauty.hotpepper.jp/slnH000281422/" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="px-12 py-8 shadow-xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#2C5F4F',
                  fontSize: '1.25rem',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F5F2EA';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                高柳本店を予約する
              </Button>
            </a>
            <a href="https://beauty.hotpepper.jp/slnH000381011/" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="px-12 py-8 shadow-xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#2C5F4F',
                  fontSize: '1.25rem',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F5F2EA';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                花堂店を予約する
              </Button>
            </a>
          </div>
          
          {/* Store Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            <div className="p-8 rounded-xl text-left" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                高柳本店
              </h3>
              <div className="space-y-2" style={{ fontSize: '0.9375rem', color: '#4A4A4A' }}>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#9DD0B3' }} />
                  <span>福井市高柳</span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ color: '#9DD0B3' }}>🚗</span>
                  <span>駐車場完備</span>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://beauty.hotpepper.jp/slnH000281422/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#2C5F4F', textDecoration: 'underline' }}
                  >
                    Hot Pepper Beautyで予約 →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-xl text-left" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <h3 className="mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#2C5F4F'
              }}>
                花堂店
              </h3>
              <div className="space-y-2" style={{ fontSize: '0.9375rem', color: '#4A4A4A' }}>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#9DD0B3' }} />
                  <span>福井市花堂北1-160</span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ color: '#9DD0B3' }}>🚗</span>
                  <span>駐車場完備</span>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://beauty.hotpepper.jp/slnH000381011/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#2C5F4F', textDecoration: 'underline' }}
                  >
                    Hot Pepper Beautyで予約 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16" style={{ backgroundColor: '#2C5F4F', color: '#F5F2EA' }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {/* Salon Info */}
          <div className="text-center mb-12">
            <h3 className="mb-6" style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              color: '#FFFFFF'
            }}>
              HAIR&MAKE peace
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: '#F5F2EA' }}>
              あなたの髪を、もっと好きになる
            </p>
          </div>
          
          {/* References */}
          <div className="mb-12 pt-12" style={{ borderTop: '1px solid rgba(245, 242, 234, 0.2)' }}>
            <h4 className="mb-6" style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.125rem',
              color: '#F5F2EA'
            }}>
              参考文献
            </h4>
            <div className="space-y-2" style={{ fontSize: '0.6875rem', lineHeight: '1.8', color: '#CCCCCC' }}>
              <p>[1] ハーツシリーズはアルギニンベースのアルカリ剤で反応が緩やかに進行し、髪への負担が少ない</p>
              <p>[2] Synergyハーツの美髪矯正は髪質改善と縮毛矯正を融合し、アルギニンベースのアルカリ剤によりブリーチ毛にも対応する</p>
              <p>[3] ハーツH・S・BはpHや還元剤が異なり、髪質に応じて使い分けられる</p>
              <p>[4] METEOは従来の酸熱トリートメントの欠点を解消した</p>
              <p>[5] METEOは髪の硬さ・ごわつきを抑えて柔らかい手触りを実現する</p>
              <p>[6] METEOはカラー剤に混ぜて髪質改善とカラーを同時に行える</p>
              <p>[A] ネオメテオストレートは酸熱トリートメントと縮毛矯正を融合し、髪の構造を整えながらクセを伸ばして自然でしなやかな仕上がりを実現する。また、ダメージを最小限に抑えブリーチ毛やエイジング毛にも対応可能。自然で空気を含んだような仕上がりが可能。酸熱処理との相乗効果によりアルカリ度を低く設定でき、内部補修と施術を同時に行える</p>
              <p>[B] ネオメテオストレートはうねり・広がり・チリつき・パサつきなど多様な髪質に対応し、薬剤濃度やpHを調整してオーダーメイド施術が可能</p>
              <p>[C] METEOストレートの薬剤pHやインクライン配合をダメージレベル別に調整することで、お客様一人ひとりに最適な施術を提供</p>
              <p>[D] カウンセリングを通じて髪の状態（うねり具合、ダメージ履歴、ブリーチやエイジングによる弱さ）を分析</p>
            </div>
          </div>
          
          {/* Recruitment Link */}
          <div className="text-center mb-8 pt-8" style={{ borderTop: '1px solid rgba(245, 242, 234, 0.2)' }}>
            <a 
              href="https://kyuujin.hair-make-peace.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                fontSize: '0.9375rem', 
                color: '#9DD0B3',
                textDecoration: 'underline',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9DD0B3'}
            >
              採用情報はこちら →
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-8" style={{ borderTop: '1px solid rgba(245, 242, 234, 0.2)' }}>
            <p style={{ fontSize: '0.75rem', color: '#999999' }}>
              © 2025 HAIR&MAKE peace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
