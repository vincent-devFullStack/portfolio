import asyncio
import pygame
import random

async def main():
    pygame.init()

    # --- window ---
    screen_width = 600
    screen_height = 600
    screen = pygame.display.set_mode([screen_width, screen_height])
    pygame.display.set_caption("Hangman")

    # --- background ---
    try:
        background = pygame.image.load("assets/bg-main-dark-800w.png")
        background = pygame.transform.scale(background, (600, 600))
    except:
        background = None

    # --- font ---
    pygame.font.init()
    try:
        font = pygame.font.SysFont("Arial", 28)
    except:
        font = pygame.font.Font(None, 28)

    # --- words ---
    try:
        with open("assets/wordlist.txt", "r", encoding="utf8") as fichier:
            words = [line.strip() for line in fichier if line.strip()]
    except:
        words = ["python", "pygame", "portfolio", "developer", "javascript", "astro", "vercel", "code"]
    
    random_word = random.choice(words)

    chances = 0
    max_chances = 12
    tested_letters = []
    wrong_letters = []
    letter_width = 20
    word_width = len(random_word) * letter_width
    center_display = (screen_width - word_width) / 2

    def masked(word: str, tested: list[str]) -> str:
        return " ".join(c if (not c.isalpha() or c in tested) else "_" for c in word)
    
    def draw_hangman(surface, errors):
        """Dessine le pendu en fonction du nombre d'erreurs"""
        # Position de base du pendu (centré)
        base_x, base_y = 300, 150
        
        # Potence (toujours visible)
        pygame.draw.line(surface, (200, 200, 200), (base_x - 50, base_y + 150), (base_x + 50, base_y + 150), 4)  # base
        pygame.draw.line(surface, (200, 200, 200), (base_x - 30, base_y + 150), (base_x - 30, base_y - 80), 4)  # poteau vertical
        pygame.draw.line(surface, (200, 200, 200), (base_x - 30, base_y - 80), (base_x + 30, base_y - 80), 4)   # poutre horizontale
        pygame.draw.line(surface, (200, 200, 200), (base_x + 30, base_y - 80), (base_x + 30, base_y - 60), 4)   # corde
        
        # Tête (erreur 1-2)
        if errors >= 2:
            pygame.draw.circle(surface, (255, 200, 200), (base_x + 30, base_y - 40), 20, 3)
        
        # Corps (erreur 3-4)
        if errors >= 4:
            pygame.draw.line(surface, (255, 200, 200), (base_x + 30, base_y - 20), (base_x + 30, base_y + 40), 4)
        
        # Bras gauche (erreur 5-6)
        if errors >= 6:
            pygame.draw.line(surface, (255, 200, 200), (base_x + 30, base_y - 10), (base_x + 10, base_y + 10), 4)
        
        # Bras droit (erreur 7-8)
        if errors >= 8:
            pygame.draw.line(surface, (255, 200, 200), (base_x + 30, base_y - 10), (base_x + 50, base_y + 10), 4)
        
        # Jambe gauche (erreur 9-10)
        if errors >= 10:
            pygame.draw.line(surface, (255, 200, 200), (base_x + 30, base_y + 40), (base_x + 10, base_y + 70), 4)
        
        # Jambe droite (erreur 11-12)
        if errors >= 12:
            pygame.draw.line(surface, (255, 200, 200), (base_x + 30, base_y + 40), (base_x + 50, base_y + 70), 4)

    # --- bouton replay ---
    replay_rect = pygame.Rect(210, 320, 180, 50)

    # --- timer ---
    start_time = pygame.time.get_ticks()
    final_time = None

    # --- pseudo ---
    entering_name = False
    player_name = ""

    # --- scores (top-3) ---
    scores = []

    clock = pygame.time.Clock()

    running = True
    while running:
        mouse_pos = pygame.mouse.get_pos()

        if len(tested_letters) == 0:
            start_time = pygame.time.get_ticks()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

            if event.type == pygame.KEYDOWN:
                if entering_name:
                    if event.key == pygame.K_RETURN and len(player_name) == 3:
                        scores.append((player_name, final_time))
                        scores.sort(key=lambda x: x[1])
                        scores = scores[:3]
                        player_name = ""
                        entering_name = False
                    elif event.key == pygame.K_BACKSPACE:
                        player_name = player_name[:-1]
                    elif len(player_name) < 3 and event.unicode.isalpha():
                        player_name += event.unicode.upper()
                else:
                    if event.unicode.isalpha() and len(event.unicode) == 1:
                        letter = event.unicode.lower()
                        if letter not in tested_letters:
                            tested_letters.append(letter)
                            if letter not in random_word:
                                wrong_letters.append(letter)
                                chances += 1

                    if event.key == pygame.K_r:
                        all_found = all((not c.isalpha()) or (c in tested_letters) for c in random_word)
                        lost = chances >= max_chances
                        if all_found or lost:
                            tested_letters = []
                            wrong_letters = []
                            chances = 0
                            random_word = random.choice(words)
                            word_width = len(random_word) * letter_width
                            center_display = (screen_width - word_width) / 2
                            start_time = pygame.time.get_ticks()
                            final_time = None
                            entering_name = False
                            player_name = ""

            if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
                all_found = all((not c.isalpha()) or (c in tested_letters) for c in random_word)
                lost = chances >= max_chances
                if (all_found or lost) and replay_rect.collidepoint(mouse_pos):
                    tested_letters = []
                    wrong_letters = []
                    chances = 0
                    random_word = random.choice(words)
                    word_width = len(random_word) * letter_width
                    center_display = (screen_width - word_width) / 2
                    start_time = pygame.time.get_ticks()
                    final_time = None
                    entering_name = False
                    player_name = ""

        all_found = all((not c.isalpha()) or (c in tested_letters) for c in random_word)
        lost = chances >= max_chances

        # --- calcul du temps ---
        if final_time is None and (all_found or lost):
            final_time = (pygame.time.get_ticks() - start_time) // 1000
            if all_found:
                entering_name = True

        # --- DRAW ---
        if background:
            screen.blit(background, (0, 0))
        else:
            screen.fill((30, 30, 40))

        if entering_name:
            prompt = font.render("Entrez vos 3 lettres : " + player_name, True, (255, 255, 0))
            screen.blit(prompt, (80, 250))
            time_surface = font.render(f"Temps : {final_time}s", True, (255, 255, 255))
            screen.blit(time_surface, (200, 300))

        elif all_found:
            win_surface = font.render(f"Bravo ! Le mot etait « {random_word} » !", True, (180, 255, 180))
            screen.blit(win_surface, (80, 200))
            time_surface = font.render(f"Temps : {final_time}s", True, (255, 255, 255))
            screen.blit(time_surface, (200, 260))
            pygame.draw.rect(screen, (70, 130, 180), replay_rect, border_radius=10)
            label = font.render("Rejouer (r)", True, (255, 255, 255))
            screen.blit(label, (replay_rect.x + 20, replay_rect.y + 10))

        elif lost:
            lose_surface = font.render(f"Perdu ! Le mot etait « {random_word} » !", True, (255, 180, 180))
            screen.blit(lose_surface, (80, 200))
            time_surface = font.render(f"Temps : {final_time}s", True, (255, 255, 255))
            screen.blit(time_surface, (200, 260))
            pygame.draw.rect(screen, (2, 142, 213), replay_rect, border_radius=5)
            label = font.render("Rejouer (r)", True, (255, 255, 255))
            screen.blit(label, (replay_rect.x + 20, replay_rect.y + 10))

        else:
            # Dessine le pendu
            draw_hangman(screen, chances)
            
            word_surface = font.render(masked(random_word, tested_letters).upper(), True, (255, 255, 255))
            screen.blit(word_surface, (center_display, 350))

            tries_surface = font.render(f"Chances restantes : {max_chances - chances}", True, (255, 255, 255))
            screen.blit(tries_surface, (20, 540))

            wrong_str = "Erreurs : " + (", ".join(wrong_letters) if wrong_letters else "")
            wrong_surface = font.render(wrong_str, True, (255, 150, 150))
            screen.blit(wrong_surface, (20, 510))

            elapsed = (pygame.time.get_ticks() - start_time) // 1000
            timer_surface = font.render(f"Temps : {elapsed}s", True, (255, 255, 0))
            screen.blit(timer_surface, (380, 20))

        # TOP 3
        x = 30
        title = font.render("TOP 3", True, (220, 220, 220))
        screen.blit(title, (x, 450))
        for idx, (name, t) in enumerate(scores, start=1):
            score_surface = font.render(f"{idx}. {name} - {t}s", True, (200, 200, 200))
            screen.blit(score_surface, (x, 475))
            x += 190

        pygame.display.flip()
        clock.tick(60)
        
        # CRUCIAL pour Pygbag !
        await asyncio.sleep(0)

    pygame.quit()

# Point d'entrée
asyncio.run(main())