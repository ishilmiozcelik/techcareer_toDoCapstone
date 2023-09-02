# Todo Techcareer Capstone Project

Kullanıcıların görevlerini yönetmelerine, düzenlemelerine ve silmelerine izin veren kapsamlı bir **Todo** uygulaması.

**İÇİNDEKİLER**

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
