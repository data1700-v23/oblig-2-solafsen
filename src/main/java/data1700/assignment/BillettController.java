package data1700.assignment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {

    private final List<Billett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett) { alleBilletter.add(innBillett); }
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle() { return alleBilletter; }
    @GetMapping("/slettAlle")
    public void slettAlle() { alleBilletter.clear(); }

}
