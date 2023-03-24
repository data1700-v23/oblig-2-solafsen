package data1700.assignment;

public class Billett {

    private String film;

    private String antall;

    private String fornavn;

    private String etternavn;

    private String telefonnr;

    private String epost;

    public Billett(String a, String b, String c, String d, String e, String f) {
        film = a;
        antall = b;
        fornavn = c;
        etternavn = d;
        telefonnr = e;
        epost = f;
    }

    public Billett() { }

    // Get og Set metodene

    public String getFilm() {return film;}
    public void setFilm(String a) {film = a;}

    public String getAntall() {return antall;}
    public void setAntall(String b) {antall = b;}

    public String getFornavn() {return fornavn;}
    public void setFornavn(String c) {fornavn = c;}

    public String getEtternavn() {return etternavn;}
    public void setEtternavn(String d) {etternavn = d;}

    public String getTelefonnr() {return telefonnr;}
    public void setTelefonnr(String e) {telefonnr = e;}

    public String getEpost() {return epost;}
    public void setEpost(String f) {epost = f;}

}
