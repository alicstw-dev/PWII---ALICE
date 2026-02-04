<template>
    <section class="profile">
    <img src="../assets/perfil.jpg" alt="perfil" />

    <div class="profile-text">
        <h1>Percy Jackson</h1>
        <p>
        Percy Jackson é o protagonista semideus da saga Percy Jackson e os Olimpianos, criado por Rick Riordan. Nascido em 18 de agosto de 1993, é filho de Sally Jackson e Poseidon. Enfrentando TDAH, dislexia e expulsões escolares, descobre sua natureza divina aos 12 anos. Com poderes de controlar água.
        </p>
    </div>
</section>

</template>

<script>
    export default{
        name: "Profile",
    }
</script>

<style scoped>
.profile {
    background-color: #0b003f;
    color: white;
    width: 100%;
    padding: 80px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
}

.profile img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid white;
    object-fit: cover;
    flex-shrink: 0;
}

.profile-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.profile h1 {
    font-size: 42px;
    margin-bottom: 15px;
    font-weight: bold;
}

.profile p {
    max-width: 900px;
    font-size: 18px;
    line-height: 1.5;
}
</style>