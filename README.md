# Todo Techcareer Capstone Project


Sunum için: https://www.canva.com/design/DAFtJnUzNr8/tAOZPMeFiPfS9Ai_yUMEMg/edit?utm_content=DAFtJnUzNr8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Kullanıcıların görevlerini yönetmelerine, düzenlemelerine ve silmelerine izin veren kapsamlı bir **Todo** uygulaması.

**İÇİNDEKİLER**
____________________

**BACKEND**

- Model
  
- Repository

- Service

- Controller

- Configuration

**FRONTEND (REACT JS)**

- App Component

- TaskList Component

- Additional Components

____________________

**PROJEYİ ÇALIŞTIRMA**

- Repository clone: https://github.com/ishilmiozcelik/techcareer_toDoCapstone
- cd techcareer_toDoCapstone
______________________
  
**BACKEND KATMANLARI**


Backend Spring Boot kullanılarak geliştirilmiştir.

- **Model (Entity):** ID, Name ve Completion statuslarla beraber Task Entiysini temsil eder.

- **Repository:** Extends JpaRepository. CRUD işlemleri için gerekli. findByCompleted() gibi özel sorgu metotlarını içerir.

- **Service:** Projenin iş mantığının yer aldığı katmandır. getAllTasks(), saveTask() gibi operasyonları yönetir.

- **Controller:** Gelen API isteklerini yönetir, yanıtları geri gönderir. Task oluşturma, düzenleme, silme endpointlerini içerir.

- **Configuration:** localhost:3000 üzerinde çalışan frontend'den gelen isteklere izin vermek için CORS ayarlarını yapar.
______________________

**FRONTEND**


Frontend React kullanılarak geliştirilmiştir.


**App.js**

- Uygulamayı yöneten merkezi bileşen

- Task ekleme, değiştirme, silme gibi özellikleri uygular.

- HTTP istekleri için axios kullanarak backendle entegre olur.

**TaskList.js**

- Tüm görevleri listeler, kullanıcılara her görevi değiştirme, düzenleme veya silme olanağı tanır.

- Listede doğrudan görev düzenlemek için etkileşimli bir kullanıcı arayüzü sunar.

**Diğer ek bileşenler:**


- **TaskInput:** Yeni görev eklemek için bileşen.

- **FilterButtons:** Tamamlanma durumlarına göre görev filtrelemeyi sağlar.

- **DeleteButtons:** Toplu silme işlemleri için düğmeleri sağlar.

______________________

**TESTING**


Backend'de API'ye istekler göndermek ve yanıtları doğrulamak için Postman kullanın.
