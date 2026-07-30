# BizSidekick

[Desteklenen tüm diller](README.md) · [English](../../README.md)

BizSidekick'i Codex, Claude ve WorkBuddy ile kullanmak için herkese açık eklenti pazarı. Eklenti,
`https://mcp.bizsidekick.app/mcp` adresinde barındırılan Bustly MCP hizmetine bağlanır. Bu depo sağlayıcı
kimlik bilgileri, satıcı verileri, MCP hizmeti kaynak kodu veya dağıtım gizli bilgileri içermez.

## Codex masaüstü

Aşağıdaki metni bir Codex görevine yapıştırın:

```text
Codex'in özel eklenti pazarını kullanarak `BizSidekick-AI/bizsidekick` kaynağını ekle ve BizSidekick'i yalnızca gerekiyorsa yükle. Depoyu tarayıcıda açma veya okuma. Mevcut oturumumu yeniden kullan. Yetkilendirme hesap kurulumu olmadan tamamlanırsa bağlantıyı doğrula ve mağazalarımı ve son ürünleri gösteren yalnızca bir yeni BizSidekick görevini otomatik olarak oluşturup aç. Oturum açma, kayıt veya BizSidekick onboarding gerekiyorsa bu yükleme görevini açık tut, tarayıcıda tamamlayıp `Devam` yanıtını vermemi iste, ardından yetkilendirmeyi doğrula ve görevi oluştur.
```

CLI alternatifi:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Aşağıdaki metni bir Claude Code oturumuna yapıştırın:

```text
Claude Code'un özel eklenti pazarını kullanarak `BizSidekick-AI/bizsidekick` kaynağını ekle ve `bizsidekick@bizsidekick` eklentisini yalnızca gerekiyorsa yükle. Depoyu tarayıcıda açma veya okuma. Mevcut oturumumu koru ve yeni yüklemeden sonra `/reload-plugins` komutunu yalnızca bir kez çalıştır. Yetkilendirme hesap kurulumu olmadan tamamlanırsa bu oturumda devam et ve mağazalarımı ve son ürünleri gösteren salt okunur bir BizSidekick görevini otomatik olarak başlat. Oturum açma, kayıt veya BizSidekick onboarding gerekiyorsa bu oturumu açık tut, tarayıcıda tamamlayıp `Devam` yanıtını vermemi iste, ardından yetkilendirmeyi doğrula ve görevi başlat.
```

CLI alternatifi:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy masaüstü

Aşağıdaki metni bir WorkBuddy konuşmasına yapıştırın:

```text
WorkBuddy'nin özel eklenti pazarını kullanarak `BizSidekick-AI/bizsidekick` kaynağını ekle ve `bizsidekick@bizsidekick` eklentisini yalnızca gerekiyorsa yükle. Depoyu tarayıcıda açma veya okuma. Mevcut oturumumu koru ve yeni yüklemeden sonra `/reload-plugins` komutunu yalnızca bir kez çalıştır. Yetkilendirme hesap kurulumu olmadan tamamlanırsa bu konuşmada devam et ve mağazalarımı ve son ürünleri gösteren salt okunur bir BizSidekick görevini otomatik olarak başlat. Oturum açma, kayıt veya BizSidekick onboarding gerekiyorsa bu konuşmayı açık tut, tarayıcıda tamamlayıp `Devam` yanıtını vermemi iste, ardından yetkilendirmeyi doğrula ve görevi başlat.
```

CLI alternatifi:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Güvenlik modeli

- Google/Bustly oturum açma işlemi tarayıcıda OAuth ile gerçekleşir; çalışma alanı iş görevinin içinde seçilir.
- Kullanıcı kapsamlı OAuth izni mevcut Bustly üyeliğiyle sınırlıdır; bir görev tam olarak bir çalışma alanına bağlanır.
- Mağaza kapsamı belirtilmeyen okuma, çalışma alanındaki tüm etkin ve erişilebilir bağlantıları kapsar ve onay gerektirmez.
- Değişiklikler önce önizlenir ve yalnızca açık onaydan sonra uygulanır.
- Yüksek riskli işlemler yazılı bir onay gerektirir.
- Sağlayıcı kimlik bilgileri hiçbir zaman MCP istemcisine veya bu depoya gönderilmez.
- Eklenti Skills ve MCP araç açıklamaları herkese açık entegrasyon öğeleridir; bir güvenlik sınırı değildir.
